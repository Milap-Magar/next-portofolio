"use client";

import React, { useEffect, useState } from "react";
import Nav from "./ui/Nav";

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) setNavState(true);

    setNavState(false);
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
        className={
          !navState
            ? "absolute top-0 left-0 right-0 opacity-100 z-[200] w-full h-[10vh]"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-90 z-50 blur-effect-theme bg-[#bdbdbd] text-white"
        }
      >
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
