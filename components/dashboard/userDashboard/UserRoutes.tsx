import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const UserRoutes = () => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks?.map((link) => {
        const isActive = pathname === link?.route;
        return (
          <Link
            href={link?.route}
            key={link?.label}
            className={cn(
              "flex gap-4 items-center p-4 rounded-lg justify-start",
              {
                "bg-main-2": isActive,
              }
            )}>
            <Image
              src={link?.imgUrl}
              alt={link?.label}
              width={24}
              height={24}
            />

            <p className='text-lg font-semibold max-lg:hidden'>{link?.label}</p>
          </Link>
        );
      })}
    </>
  );
};

export default UserRoutes;
