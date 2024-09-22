"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

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
        className={`hidden md:flex ${syne.className} flex justify-between py-4 px-24 text-xl font-semibold`}
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <a
          href="/"
          className="px-4 py-2 header-item-bg rounded-lg  text-lg font-regular"
        >
          Home
        </a>
        <div className="flex gap-2">
          <Link
            href="/about-me"
            className="px-4 py-2 header-item-bg rounded-lg "
          >
            About Me
          </Link>
          <Link
            href="/web-projects"
            className="px-4 py-2 header-item-bg rounded-lg "
          >
            Web Apps
          </Link>
          <Link
            href="/mobile-projects"
            className="px-4 py-2 header-item-bg rounded-lg "
          >
            Mobile Apps
          </Link>
        </div>
      </nav>
      <nav
        className={`flex md:hidden ${syne.className} justify-between py-4 px-8 text-xl font-semibold`}
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <a href="/">
          <Image
            src="/abdulrehman.png"
            alt="My Image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </a>

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
          <div
            className="absolute top-16 right-4  shadow-md rounded-md p-"
            style={{
              backgroundColor: "rgba(241, 192, 138, 0.9)",
            }}
          >
            <Link
              href="about-me"
              className="block px-7 py-2 text-lg"
              onClick={toggleDropdown}
            >
              About Me
            </Link>
            <Link
              href="#web-projects"
              className="block px-7 py-2 text-lg"
              onClick={toggleDropdown}
            >
              Web Apps
            </Link>
            <Link
              href="mobile-projects"
              className="block px-7 py-2 text-lg"
              onClick={toggleDropdown}
            >
              Mobile Apps
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
