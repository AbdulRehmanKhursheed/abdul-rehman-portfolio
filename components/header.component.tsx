"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import { useState } from "react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav
        className={`hidden md:flex ${syne.className} flex justify-between  py-4 px-24 text-xl font-semibold`}
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <a href="/">Home</a>
        <div className="flex gap-7">
          <a href="">About Me</a>
          <a href="">Web Apps</a>
          <a href="">Mobile Apps</a>
        </div>
      </nav>
      <nav
        className={`flex md:hidden ${syne.className} justify-between py-4 px-8 text-xl font-semibold`}
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <Image
          src="/abdulrehman.png"
          alt="My Image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <button onClick={toggleDropdown} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md">
            <a href="#about-me" className="block px-4 py-2">
              About Me
            </a>
            <a href="#web-apps" className="block px-4 py-2">
              Web Apps
            </a>
            <a href="#mobile-apps" className="block px-4 py-2">
              Mobile Apps
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
