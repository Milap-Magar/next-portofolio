"use client";

import { MainHeading, navItems } from "../../../constants";
import { useState } from "react";
import { About, Contact, Main, Work } from "../pages";

interface HeadingMap {
  id: number;
  title: string;
}

interface NavProps {
  id: string;
  title: string;  
  key: number;
}

export default function Title() {
  // const handleSelect = (id: number) => {
  //   setSelectedId(id);
  // };

  return (
    <div>
      <ul className="center w-full h-full">
        <Main />
        <Work />
        <About />
        <Contact />
      </ul>
    </div>
  );
}
