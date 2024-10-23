"use client";
import useGetAllUsers from "@/hooks/apiHooks/userHooks/useGetAllUser";
import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
const Statistics = () => {
  const { data } = useGetAllUsers();

  const totalAdmin = data?.filter((u) => u?.role === "admin");
  const totaluser = data?.filter((u) => u?.role === "user");

  return (
    <section className="my-6 text-gray-800 rounded-md">
      <div className="p-8 rounded-md">
        <Image
          src="/images/banner.jpg"
          alt="banner"
          width={500}
          height={500}
          className="w-full rounded-md"
        />
      </div>
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-main-2">
            <MdManageAccounts className="text-5xl text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">
              {totalAdmin?.length}
            </p>
            <p className="capitalize">Total Admin</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-main-2">
            <FaUsers className="text-5xl text-white" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">
             {
              totaluser.length
             }
            </p>
            <p className="capitalize">All users</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-main-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-9 w-9 text-gray-100">
              <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
              <rect width="32" height="32" x="80" y="264"></rect>
              <rect width="32" height="32" x="240" y="128"></rect>
              <rect width="32" height="32" x="136" y="168"></rect>
              <rect width="32" height="32" x="400" y="264"></rect>
              <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">172%</p>
            <p className="capitalize">Growth</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-main-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-9 w-9 text-gray-100">
              <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">17%</p>
            <p className="capitalize">Bounce rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
