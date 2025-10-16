import React from "react";
import photo1 from "@/assets/Group 1 (2).png";
import photo2 from "@/assets/image 64.png";
import photo3 from "@/assets/image 41.png";
import photo4 from "@/assets/Macbook 1.png";

const Banners2 = () => {
  return (
    <div className="w-[1707px] h-[640px] flex">
      <div className="w-[425px] h-[640px] pl-[20px]">
        <img src={photo4.src} alt="" className="w-[360px]"/>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[33px] font-light">Popular Products</h1>
          <p className="text-[14px] text-gray-500 w-[290px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] border-2 border-black rounded-xl">Shop Now</button>
        </div>
      </div>
      <div className="w-[425px] h-[640px] bg-[#F9F9F9] pl-[20px]">
        <img src={photo2.src} alt="" className="w-[360px]"/>
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[33px] font-light">Ipad Pro</h1>
          <p className="text-[14px] text-gray-500 w-[290px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] border-2 border-black rounded-xl">Shop Now</button>
        </div>
      </div>
      <div className="w-[425px] h-[640px] bg-[#EAEAEA] pl-[20px]">
        <img src={photo3.src} alt="" className="w-[360px]"/>
        <div className="flex flex-col gap-[15px]"> 
          <h1 className="text-[33px] font-light">Samsung Galaxy </h1>
          <p className="text-[14px] text-gray-500 w-[290px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] border-2 border-black rounded-xl">Shop Now</button>
        </div>
      </div>
      <div className="w-[425px] h-[640px] bg-[#2C2C2C] pl-[20px]">
        <img src={photo4.src} alt="" className="w-[360px]"/>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[33px] font-light">Macbook Pro</h1>
          <p className="text-[14px] text-gray-500 w-[290px]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="w-[191px] h-[56px] border-2 border-black rounded-xl">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banners2;
