"use client";

import React, { useEffect, useState } from "react";
import Nav from "./ui/Nav";

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) setNavState(true);
    else setNavState(false); 
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div className="min-w-full min-h-auto">
      <div
        className={`transition-all duration-300 ${
          !navState
            ? "absolute top-0 left-0 right-0 opacity-100 z-[200] w-full h-[15vh] bg-transparent dark:bg-green-400 bg-opacity-30 dark:bg-opacity-25"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-90 z-50 blur-effect-theme bg-green-100 text-white"
        }`}
      >
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
