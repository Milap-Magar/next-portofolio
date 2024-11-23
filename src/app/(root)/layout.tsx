import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full bg-green-50">
      {/* Sidebar */}
      <div className="relative w-16 flex flex-col items-center">
        {/* Circle and Line */}
        <div className="absolute top-32">
          {/* Circle */}
          <div className="w-16 h-14 bg-green-500 blur-md rounded-full "></div>
          {/* Line */}
          <div className="h-screen w-3 bg-green-500 blur-sm rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
