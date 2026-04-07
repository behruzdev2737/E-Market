"use client";

import logotip from "@/assets/Logo Vector (1).png";
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const TopHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? "font-semibold text-black"
      : "text-gray-400 hover:text-black";

  return (
    <div className="w-full px-4 md:px-10 h-[88px] flex items-center justify-between relative">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        <Link href="/">
          <Image
            src={logotip}
            alt="logo"
            className="w-[65px] h-[23px]"
          />
        </Link>
      </div>

      {/* SEARCH */}
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
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/About" className={linkClass("/About")}>
          About
        </Link>

        <Link href="/ContactUs" className={linkClass("/ContactUs")}>
          Contact US
        </Link>

        <Link href="/Blog" className={linkClass("/Blog")}>
          Blog
        </Link>
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
          
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/About" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/ContactUs" onClick={() => setOpen(false)}>
            Contact US
          </Link>

          <Link href="/Blog" onClick={() => setOpen(false)}>
            Blog
          </Link>

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