import Image from "next/image";
import React from "react";

interface MemberProps {
  src: string;
  name: string;
  profession: string;
  role: string;
}

const Member: React.FC<MemberProps> = ({ src, name, profession, role }) => {
  return (
    <div className='flex flex-col items-center justify-between border border-black rounded-md bg-transparent hover:bg-[#aabcd8] hover:scale-105 transition-all h-auto w-auto max-w-[320px] mx-auto'>
      <Image
        src={src}
        alt={name}
        height={200}
        width={200}
        className='rounded-t-lg min-w-[256px] min-h-[256px]'
      />
      <div className='bg-main-2 hover:bg-main-3 w-full text-white hover:text-[] p-2 rounded-b-lg'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='font-semibold'>{profession}</p>
        <p className='font-semibold'>{role}</p>
      </div>
    </div>
  );
};

export default Member;
