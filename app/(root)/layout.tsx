import StreamVideoProvider from "@/provider/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ChatVibe",
  description: "video calling app",
  icons: {
    icon: "/images/logo.png",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
