import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ToggleBtnProps {
  setToggle: (value: string) => void;
  toggle: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ setToggle, toggle }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dashboard") {
      setToggle("user");
    } else if (
      pathname === "/dashboard/admin-statistics" ||
      pathname === "/dashboard/manage-user"
    ) {
      setToggle("admin");
    } else {
      setToggle("user");
    }
  }, [pathname]);

  const userHandler = () => {
    router.push("/dashboard");
    setTimeout(() => {
      setToggle("user");
    }, 600);
  };

  const adminHandler = () => {
    router.push("/dashboard/admin-statistics");
    setTimeout(() => {
      setToggle("admin");
    }, 600);
  };
  return (
    <label
      htmlFor='Toggle3'
      className='relative w-40 inline-flex ml-6 justify-center items-center rounded-full cursor-pointer text-black font-semibold'>
      <input
        id='Toggle3'
        type='checkbox'
        className='hidden peer'
        checked={toggle === "admin"}
        readOnly
      />

      <div className='relative w-full h-10 bg-gray-300 rounded-full p-1 shadow-md transition-all duration-300 flex justify-between items-center'>
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-main-2 rounded-full transition-transform duration-500 ${
            toggle === "admin" ? "translate-x-full" : "translate-x-0"
          }`}></div>

        <span
          onClick={() => userHandler()}
          className={`relative z-10 w-1/2 text-center px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
            toggle === "user" ? "text-white" : "text-black"
          }`}>
          User
        </span>

        <span
          onClick={() => adminHandler()}
          className={`relative z-10 w-1/2 text-center px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
            toggle === "admin" ? "text-white" : "text-black"
          }`}>
          Admin
        </span>
      </div>
    </label>
  );
};

export default ToggleBtn;
