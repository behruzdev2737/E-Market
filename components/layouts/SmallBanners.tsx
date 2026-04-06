import Playstation from "@/assets/PlayStation.png";
import HeadPhone from "@/assets/hero__gnfk5g59t0qe_xlarge_2x 1headphone.png";
import WizualGlasses from "@/assets/image 36.png";
import Macbook from "@/assets/MacBook Pro 14.png";

const SmallBanners = () => {
  return (
    <div className="w-full px-4 md:px-10 py-6">
      
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">
          
          {/* Playstation */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img src={Playstation.src} alt="" className="w-[220px] sm:w-[300px] md:w-[360px] object-contain" />
            <div>
              <h1 className="text-[28px] sm:text-[40px] md:text-[59px] font-semibold">
                Playstation 5
              </h1>
              <p className="text-[14px] md:text-[18px] text-gray-500 max-w-[320px]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* Bottom small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* AirPods */}
            <div className="flex items-center gap-4 bg-[#EDEDED] p-4">
              <img src={HeadPhone.src} alt="" className="w-[80px] sm:w-[100px]" />
              <div>
                <h1 className="text-[20px] md:text-[30px] font-semibold leading-tight">
                  Apple AirPods <span className="font-bold">Max</span>
                </h1>
                <p className="text-[14px] md:text-[18px] text-gray-500">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-center gap-4 bg-[#353535] p-4">
              <img src={WizualGlasses.src} alt="" className="w-[80px] sm:w-[100px]" />
              <div>
                <h1 className="text-[20px] md:text-[30px] font-semibold text-white">
                  Apple Vision <span className="font-bold">Pro</span>
                </h1>
                <p className="text-[14px] md:text-[18px] text-gray-400">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - MACBOOK */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#EDEDED] p-6">
          
          <div className="mb-6 md:mb-0 md:ml-[50px]">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-light leading-tight">
              Macbook <span className="font-bold">Air</span>
            </h1>

            <p className="text-[14px] md:text-[18px] text-gray-500 max-w-[420px] mt-2">
              The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>

            <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border-2 border-black rounded-xl mt-4">
              Shop now
            </button>
          </div>

          <img 
            src={Macbook.src} 
            alt="" 
            className="w-[200px] sm:w-[260px] md:w-[292px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default SmallBanners;