"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "@/components/meetComponents/Loader";
import "./style.css";

interface User {
  _id: string;
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  role: string;
}

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/all`);
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChangeFrontend = async(userId: string,email :string, newRole: string) => {

  // update user role
   try {
    if(newRole === 'premiumUser'){
      Swal.fire("premiumUser featured coming soon!");
    }else{
       await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/updateRole?email=${email}`,
      {
    "role": newRole
      });

         Swal.fire({
      position: "top",
      icon: "success",
      title: "User role update successfull",
      showConfirmButton: false,
      timer: 1500,
      background: "#227670",
      customClass: {
        title: "white-text",
      },
    });
    }
   } catch (error) {
     Swal.fire({
      icon: 'error',
      title: "Something is worng!",
     });
   }


    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );

   
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#161925] text-white p-4">
  <h1 className="text-2xl font-bold mb-6 text-center">All Users</h1>

  {/* Table for Medium and Large Devices */}
  <div className="overflow-x-auto p-4 hidden md:block">
    <table className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-main-2 text-left">
          <th className="py-3 px-4 text-sm font-medium text-gray-300">#</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Image</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Full Name</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Email</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className="hover:bg-[#1C1F2E] hover:text-white transition">
            <td className="py-2 px-4">{index + 1}</td>
            <td className="py-2 px-4">
              <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
            </td>
            <td className="py-2 px-4 text-sm">{user.fullName}</td>
            <td className="py-2 px-4 text-sm">{user.emailAddresses}</td>
            <td className="py-2 px-4 text-sm">
              <select
                value={user.role}
                onChange={(e) => handleRoleChangeFrontend(user._id, user.emailAddresses, e.target.value)}
                className="bg-gray-700 text-white rounded px-2 py-1"
              >
                <option value="user">User</option>
                <option value="premiumUser">Premium User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile-Friendly Card Layout for Small Devices */}
  <div className="overflow-x-auto p-4 md:hidden">
    <table className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-main-2 text-left">
          <th className="py-3 px-4 text-sm font-medium text-gray-300 hidden md:block">#</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300 hidden md:block">Image</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Full Name</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300 hidden md:block">Email</th>
          <th className="py-3 px-4 text-sm font-medium text-gray-300">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className="hover:bg-[#1C1F2E] hover:text-white transition">
            <td className="py-2 px-4 hidden md:block">{index + 1}</td>
            <td className="py-2 px-4 hidden md:block">
              <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
            </td>
            <td className="py-2 px-4 text-sm">{user.fullName}</td>
            <td className="py-2 px-4 text-sm hidden md:block">{user.emailAddresses}</td>
            <td className="py-2 px-4 text-sm">
              <select
                value={user.role}
                onChange={(e) => handleRoleChangeFrontend(user._id, user.emailAddresses, e.target.value)}
                className="bg-gray-700 text-white rounded px-2 py-1"
              >
                <option value="user">User</option>
                <option value="premiumUser">Premium User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default ManageUsers;
