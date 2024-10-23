'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

// Define a User type based on your user data structure
interface User {
  _id: string;
  emailAddresses: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
}

interface APIResponse {
  user: User;
  role: string;
}

// Custom hook to fetch user and role based on email
const useGetRoleOrUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress; // Get the user's email

  const [userData, setUserData] = useState<User | null>(null); // State to hold user data
  const [role, setRole] = useState<string>(""); // State to hold user role
  const [loading, setLoading] = useState<boolean>(true); // State to show loading status
  const [error, setError] = useState<string | null>(null); // State to hold any errors

  useEffect(() => {
    // Asynchronous function to fetch user and role
    const fetchUserAndRole = async () => {
      try {
        const res = await axios.get<APIResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/one?email=${email}`);
        const { user, role } = res.data;

        setUserData(user); // Set user data to state
        setRole(role); // Set role to state
      } catch (err) {
        console.error("Error fetching user and role", err);
        setError("Error fetching user and role");
      } finally {
        setLoading(false); // Disable loading after the fetch is done
      }
    };

    // Call the fetch function if email exists
    if (email) {
      fetchUserAndRole();
    }
  }, [email]);

  // Return user data, role, loading, and error
  return { userData, role, loading, error };
};

export default useGetRoleOrUser;
