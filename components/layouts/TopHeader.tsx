"use client";

import logotip from "@/assets/Logo Vector (1).png";
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const TopHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-10 h-[88px] flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Burger */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        <a href="/">
          <img src={logotip.src} className="w-[65px] h-[23px]" />
        </a>
      </div>

      {/* SEARCH (hidden mobile) */}
      <div className="hidden md:flex w-[400px] h-[56px] bg-[#F5F5F5] rounded-xl items-center gap-2">
        <Search className="ml-4" />
        <input
          type="text"
          placeholder="SEARCH"
          className="outline-none w-full bg-transparent"
        />
      </div>

      {/* MENU */}
      <div className="hidden md:flex items-center gap-[40px]">
        <a
          href="/"
          className={
            pathname === "/"
              ? "font-semibold text-black"
              : "text-gray-400 hover:text-black"
          }
        >
          Home
        </a>

        <a
          href="/About"
          className={
            pathname === "/About"
              ? "font-semibold text-black"
              : "text-gray-400 hover:text-black"
          }
        >
          About
        </a>

        <a
          href="/ContactUs"
          className={
            pathname === "/ContactUs"
              ? "font-semibold text-black"
              : "text-gray-400 hover:text-black"
          }
        >
          Contact US
        </a>

        <a
          href="/Blog"
          className={
            pathname === "/Blog"
              ? "font-semibold text-black"
              : "text-gray-400 hover:text-black"
          }
        >
          Blog
        </a>
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-[16px] md:gap-[24px]">
        <Heart />
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <User />
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-[88px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/ContactUs">Contact US</a>
          <a href="/Blog">Blog</a>

          {/* mobile search */}
          <div className="w-[90%] h-[50px] bg-[#F5F5F5] rounded-xl flex items-center gap-2 px-3">
            <Search />
            <input
              type="text"
              placeholder="SEARCH"
              className="outline-none w-full bg-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;