"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navItems } from "../../../constants";
import Soicals from "./Soicals";
import Link from "next/link";

interface NavItems {
  id: string;
  title: string;
  key: number;
}

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<NavItems | null>(
    navItems[0]
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    const root = window.document.documentElement;
    root.classList.add(savedTheme);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    root.classList.remove(isDarkMode ? "dark" : "light");
    root.classList.add(newTheme);
    window.localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectItem = (item: NavItems) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };
  return (
    <div className="w-full h-auto flex justify-between items-center">
      {/* Button Section */}
      <div className="flex items-center">
        <button onClick={toggleTheme} className="cursor-pointer border-none">
          <Image
            src={
              isDarkMode
                ? "/assets/Icons/bulb-dark.svg"
                : "/assets/Icons/bulb.svg"
            }
            alt="bulb-icon"
            width={25}
            height={25}
            className="m-2"
            priority
          />
        </button>
        {/* Navigation Section */}
        {isMobile ? (
          <>{/* FOR MOBILE DEVICES */}</>
        ) : (
          <nav className="nav-section flex gap-2 items-center mt-3">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer"
              >
                <span className=" dark:text-[#00FF00] text-green-500 font-normal">
                  {selectedItem?.title}
                </span>
                <Image
                  src="/assets/Icons/arrow.svg"
                  width={20}
                  height={20}
                  alt="drop-icon"
                  className={`arrow transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <ul
                className={`text-green-50 nav-section-item absolute top-full left-0 bg-green-200 dark:bg-green-300 rounded-2xl transition-opacity font-tomorrow ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {navItems
                  .filter((item) => item.id !== selectedItem?.id)
                  .map((item: NavItems) => (
                    <Link href={item.id} key={item.key}>
                      <li
                        id={item.id}
                        className="p-3 font-normal rounded-2xl dark:hover:bg-green-200 hover:text-[#00FF00] transition-colors cursor-pointer"
                        onClick={() => handleSelectItem(item)}
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
      {/* Logo Section */}
      <figure className="relative block">
        <Image
          src="/assets/Icons/Logo-dark.svg"
          alt="logo-icon"
          width={45}
          height={45}
          className="w-4/5"
        />
      </figure>
      {/* Social Icons */}
      <nav className="nav-section flex gap-2 items-center mt-3">
        <Soicals />
      </nav>{" "}
    </div>
  );
};

export default Nav;
