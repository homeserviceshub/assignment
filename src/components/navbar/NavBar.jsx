"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/assets/Group.png";

const navItems = [
  { id: 0, name: "home", href: "#home" },
  { id: 1, name: "About Us", href: "#skills" },
  { id: 2, name: "Pricing", href: "#works" },
  { id: 3, name: "Features", href: "#resume" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-30 transition-shadow ${
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-5 px-4 md:px-8">
        <div className="flex items-center">
          <div className="logo mr-8">
            <Link href="/" scroll={false}>
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href} scroll={false}>
                <span className="uppercase cursor-pointer text-black hover:text-[#FF5555] font-bold">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="#download" scroll={false}>
            <span className="bg-black text-white px-8 py-2 rounded font-bold cursor-pointer">
              Download
            </span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav}>
            {isOpen ? <HiX size={25} /> : <HiMenu size={25} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white w-full">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} scroll={false}>
                  <span
                    onClick={toggleNav}
                    className="uppercase cursor-pointer text-black hover:text-[#FF5555] font-bold"
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="#download" scroll={false}>
                <span
                  onClick={toggleNav}
                  className="bg-black text-white px-8 py-2 rounded font-bold cursor-pointer"
                >
                  Download
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
