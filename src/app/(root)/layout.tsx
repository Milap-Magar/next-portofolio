import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-green-50 overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-16 flex flex-col items-center">
        <div className="absolute top-32">
          {/* Circle */}
          <div className="w-16 h-14 bg-green-500 blur-md rounded-full "></div>
          {/* Line */}
          <div className="h-screen w-3 bg-green-500 blur-sm rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto snap-y snap-mandatory">
        <Navbar />
        <main className="flex-1 scroll-smooth">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
