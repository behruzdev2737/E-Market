import React from "react";
import photo1 from "@/assets/Group 1 (2).png";
import photo2 from "@/assets/image 64.png";
import photo3 from "@/assets/image 41.png";
import photo4 from "@/assets/Macbook 1.png";

const Banners2 = () => {
  return (
    <div className="w-full px-4 md:px-10 py-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CARD 1 */}
        <div className="flex flex-col pl-[20px]">
          <img src={photo4.src} alt="" className="w-full max-w-[360px] object-contain"/>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[24px] md:text-[33px] font-light">Popular Products</h1>
            <p className="text-[14px] text-gray-500 max-w-[290px]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border-2 border-black rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col bg-[#F9F9F9] pl-[20px]">
          <img src={photo2.src} alt="" className="w-full max-w-[360px] object-contain"/>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[24px] md:text-[33px] font-light">Ipad Pro</h1>
            <p className="text-[14px] text-gray-500 max-w-[290px]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border-2 border-black rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col bg-[#EAEAEA] pl-[20px]">
          <img src={photo3.src} alt="" className="w-full max-w-[360px] object-contain"/>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[24px] md:text-[33px] font-light">Samsung Galaxy</h1>
            <p className="text-[14px] text-gray-500 max-w-[290px]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border-2 border-black rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="flex flex-col bg-[#2C2C2C] pl-[20px]">
          <img src={photo4.src} alt="" className="w-full max-w-[360px] object-contain"/>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[24px] md:text-[33px] font-light text-white">
              Macbook Pro
            </h1>
            <p className="text-[14px] text-gray-400 max-w-[290px]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border-2 border-white text-white rounded-xl">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banners2;