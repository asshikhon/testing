"use client";
import React, { useState } from "react";
import ToggleBtn from "../dashboard/ToggleBtn";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import UserRoutes from "../dashboard/userDashboard/UserRoutes";
import AdminRoutes from "../dashboard/adminDashboard/AdminRoutes";
import Loader from "./Loader";

const Sidebar = () => {
  const { userData, role, loading } = useGetRoleOrUser();
  const [toggle, setToggle] = useState<string>("user");

  if (loading) {
    return (
      <div className='sticky left-0 top-0 flex min-h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <Loader />
      </div>
    );
  }

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        <div>
          {userData?.emailAddresses && (
            <>
              {role === "admin" ? (
                <>
                  <div className='py-6'>
                    <ToggleBtn setToggle={setToggle} toggle={toggle} />
                  </div>
                  <div>
                    {toggle === "admin" ? (
                      <>
                        <AdminRoutes />
                      </>
                    ) : (
                      <>
                        <UserRoutes />
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <UserRoutes />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
