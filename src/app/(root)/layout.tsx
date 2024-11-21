import Navbar from "@/components/Navbar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Navbar />
    </div>
  );
};

export default layout;
