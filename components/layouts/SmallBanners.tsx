import Playstation from "@/assets/PlayStation.png";
import HeadPhone from "@/assets/hero__gnfk5g59t0qe_xlarge_2x 1headphone.png";
import WizualGlasses from "@/assets/image 36.png";
import Macbook from "@/assets/MacBook Pro 14.png";

const SmallBanners = () => {
  return (
    <div className="w-[1700px] h-[700px]">
    <div className="parent">
      <div className="div1 flex w-[850px] items-center">
        <img src={Playstation.src} alt="" className="w-[360px] h-[343px]" />
        <div>
          <h1 className="text-[59px] font-semibold">Playstation 5</h1>
          <p className="text-[18px] flex w-[320px] text-gray-500">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="div2 flex w-[425px] items-center gap-[40px] bg-[#EDEDED]">
        <img src={HeadPhone.src} alt="" className="w-[104px] h-[272px]" />
        <div>
          <h1 className="text-[30px] font-semibold w-[30px]">
            Apple AirPods <span className="font-bold">Max</span>
          </h1>
          <p className="text-[18px] flex w-[320px] text-gray-500">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </div>
      <div className="div3 flex w-[425px] items-center gap-[30px] bg-[#353535]">
        <img src={WizualGlasses.src} alt=""  />
        <div>
          <h1 className="text-[30px] font-semibold w-[155px] text-white">
            Apple Vision<span className="font-bold"> Pro</span>
          </h1>
          <p className="text-[18px] flex w-[150px] text-gray-500">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
      <div className="div4 flex w-[850px] h-[700px] bg-[#EDEDED] items-center">
        <div className="ml-[135px]">
            <h1 className="w-[20px] text-[64px] font-light">Macbook <span className="font-bold">Air</span></h1>
        <h1 className="text-[18px] text-gray-500 w-[420px]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</h1>
        <button className="w-[191px] h-[56px] border-[2px] border-black rounded-xl cursor-pointer">Shop now</button>
        </div>
        <img src={Macbook.src} alt="" className="w-[292px] h-[502px]"/>
      </div>
    </div>
    </div>
  );
};

export default SmallBanners;
