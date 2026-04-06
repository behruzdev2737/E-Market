"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Phone, Computer, Watch, Headphones, GamepadIcon } from "lucide-react";

const Category = () => {
  const router = useRouter();

  const categories = [
    { name: "smartphones", icon: Phone },
    { name: "laptops", icon: Computer },
    { name: "fragrances", icon: Watch },
    { name: "skincare", icon: Headphones },
    { name: "groceries", icon: GamepadIcon },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-8 md:py-12 px-4">
      
      <div className="mb-8 md:mb-10 text-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Browse By Category
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            onClick={() => router.push(`/products/${name}`)}
            className="flex flex-col justify-center items-center 
                       w-[120px] h-[100px] 
                       sm:w-[140px] sm:h-[110px] 
                       md:w-[160px] md:h-[128px] 
                       bg-[#EDEDED] rounded-xl cursor-pointer transition hover:scale-105"
          >
            <Icon size={24} className="md:w-[32px] md:h-[32px]" />
            <h2 className="mt-2 text-sm md:text-base font-medium capitalize text-center">
              {name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;