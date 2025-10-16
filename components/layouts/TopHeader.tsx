"use client";

import logotip from "@/assets/Logo Vector (1).png";
import { Contact, Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();

  return (
    <div className="w-[1707px] h-[88px] flex items-center gap-[80.53px] justify-center">
      <div className="flex gap-20 w-[120px] h-[30px]">
        <a href="/"><img src={logotip.src} className="w-[65.4px] h-[22.87px]" /></a>
      </div>
      <div className="flex w-[400px] h-[56px] bg-[#F5F5F5] rounded-xl items-center gap-2">
        <Search className="ml-6" />
        <input type="text" placeholder="SEARCH" className="outline-none w-full"/>
      </div>
      <div className="w-[369px] h-[19px] flex gap-[52px]">
        <a href="/" className={pathname === "/" ? "font-semibold text-black" : "text-gray-400 hover:text-black"}>Home</a>
        <a href="/About" className={pathname === "/About" ? "font-semibold text-black" : "text-gray-400 hover:text-black"}>About</a>
        <a href="/ContactUs" className={pathname === "/ContactUs" ? "font-semibold text-black" : "text-gray-400 hover:text-black"}>Contact US</a>
        <a href="/Blog" className={pathname === "/Blog" ? "font-semibold text-black" : "text-gray-400 hover:text-black"}>Blog</a>
      </div>
      <div className="flex gap-[24px]">
        <Heart/>
        <Link href="/cart"><ShoppingCart/></Link>
        <User/>
      </div>
    </div>
  );
};

export default TopHeader;
