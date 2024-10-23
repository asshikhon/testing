"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SmallNav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname); // State to manage the active link
  const { user } = useUser() || {};

  // Updated navbar links with hash links
  const navbarLinks = [
    {
      label: "Home",
      route: "/",
      imgUrl: "/icons/Home.svg",
    },
    {
      label: "Dashboard",
      route: "/dashboard",
      imgUrl: "/icons/Home.svg",
    },
    {
      label: "Pricing",
      route: "/pricing",
      imgUrl: "/icons/upcoming.svg",
    },
    {
      label: "Contact",
      route: "/contact",
      imgUrl: "/icons/previous.svg",
    },
    {
      label: "About",
      route: "/#about", // Hash link for About
      imgUrl: "/icons/Video.svg",
    },
  ];

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      setActiveLink(window.location.pathname + window.location.hash); // Set active link based on pathname + hash
    } else {
      setActiveLink(pathname); // Update based on pathname
    }
  }, [pathname]);

  const handleLinkClick = (link: {
    label?: string;
    route: any;
    imgUrl?: string;
  }) => {
    setActiveLink(link.route); // Update active link state
  };

  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={`/icons/hamburger.svg`}
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        {/* Added aria-describedby to resolve the warning */}
        <SheetContent
          side="left"
          className="border-none bg-dark-1"
          //   aria-describedby="sheet-description"
        >
          <SheetTitle className="hidden" aria-describedby="dsf">
            {/* Edit profile */}
            sdfdsf
          </SheetTitle>
          <SheetDescription className="hidden">
            {/* Make changes to your profile here. Click save when you're done. */}
            adfasd
          </SheetDescription>

          {/* If you want to add an actual description, you can put it here */}
          <span id="sheet-description" className="sr-only">
            Navigation menu
          </span>

          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              width={32}
              height={32}
              alt="Chat Vibe"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">ChatVibe</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {navbarLinks?.map((link) => {
                const isActive = activeLink === link.route;

                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                      href={link.route}
                      onClick={() => handleLinkClick(link)} // Update active link on click
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg w-full max-w-60 transition-all duration-300",
                        {
                          "bg-main-2": isActive, // Active link style
                        }
                      )}>
                      <Image
                        src={link.imgUrl}
                        width={24}
                        height={24}
                        alt={link.label}
                      />
                      <p className="font-semibold">{link.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>

            {user ? (
              <div className="hidden">
                <UserButton />
              </div>
            ) : (
              <Button className="text-white bg-main-2 hover:bg-main-3">
                <Link href="/sign-in">Login</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default SmallNav;
