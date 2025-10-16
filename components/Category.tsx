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
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold">Browse By Category</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            onClick={() => router.push(`/products/${name}`)}
            className="flex flex-col justify-center items-center w-[160px] h-[128px] bg-[#EDEDED] rounded-xl cursor-pointer transition"
          >
            <Icon size={32} />
            <h2 className="mt-2 font-medium capitalize">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
