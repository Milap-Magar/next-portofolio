"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navItems } from "../../constants";

const applySavedTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem("theme") || "light";
    const root = window.document.documentElement;
    root.classList.add(savedTheme);
    return savedTheme === "dark";
  }
  return false;
};

interface NavItems {
  id: string;
  title: string;
  key: number;
}

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(applySavedTheme);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<NavItems | null>(
    navItems[0]
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
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

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="nav-container">
      {/* Notification Message */}
      {showNotification && (
        <div className="absolute top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center z-50">
          <span>
            ✨ New Feature: You can now toggle between Light and Dark mode! ✨
          </span>
          <button
            onClick={closeNotification}
            className="text-white ml-4 font-bold"
          >
            ×
          </button>
        </div>
      )}
      <div>
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
          />
        </button>
      </div>
      <nav className="nav-section flex gap-2 items-center mt-3">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 p-2 bg-transparent border-none cursor-pointer"
          >
            <span className="dark:text-green-100 text-green-700 font-normal">
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
            className={`text-green-50 nav-section-item absolute top-full left-0 bg-green-200 dark:bg-green-300 shadow-lg rounded-md transition-opacity font-tomorrow ${
              isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {navItems
              .filter((item) => item.id !== selectedItem?.id)
              .map((item: NavItems) => (
                <li
                  id={item.id}
                  key={item.key}
                  className="p-3 dark:hover:bg-green-200 hover:text-[var(--color-foreground-dark)] transition-colors"
                  onClick={() => handleSelectItem(item)}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
