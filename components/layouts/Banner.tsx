import Iphone from '@/assets/Iphone Image.png'

const Banner = () => {
  return (
    <div className="bg-[#211C24] w-[1707px] h-[632px] flex items-center justify-center mt-[20px]">
        <div className="w-[714px] h-[256px] flex flex-col gap-[24px] mb-[100px]">
            <p className="font-semibold text-gray-500 text-[25px]">Pro.Beyond.</p>
            <h1 className="text-[96px] font-thin text-white">IPhone 14 <span className="font-semibold">Pro</span></h1>
            <p className="text-[18px] text-gray-500">Created to change everything for the better. For everyone</p>
            <button className="w-[191px] h-[56px] border-1 border-white rounded-xl text-white flex-shrink-0">Shop now</button>
        </div>
        <img src={Iphone.src} alt="Iphone"/>
    </div>
  );
};

export default Banner
