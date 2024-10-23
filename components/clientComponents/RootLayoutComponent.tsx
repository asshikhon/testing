"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from "../landingPage/ShareComponents/Navbar/Nav";
import CustomContainer from "../landingPage/ShareComponents/CustomContainer";
import Footer from "../landingPage/ShareComponents/Footer";

const RootLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = ["/", "/pricing", "/about", "/contact"];
  const pathName = usePathname();
  return (
    <>
      {path?.includes(pathName) ? (
        <>
          <header className="sticky  top-0 z-[100]">
            <Nav />
          </header>
          <CustomContainer>
            <main className='py-12 min-h-[calc(100vh-216px)]'>{children}</main>
          </CustomContainer>
          <Footer />
        </>
      ) : (
        <>
          <div>{children}</div>
        </>
      )}
    </>
  );
};

export default RootLayoutComponent;
