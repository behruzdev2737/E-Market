import Iphone from '@/assets/Iphone Image.png'

const Banner = () => {
  return (
    <div className="bg-[#211C24] flex flex-col md:flex-row items-center justify-center mt-[20px] px-4 md:px-10 overflow-hidden">
      
      {/* TEXT */}
      <div className="w-full md:w-[714px] flex flex-col gap-[16px] md:gap-[24px] mb-[40px] md:mb-[100px] text-center md:text-left">
        
        <p className="font-semibold text-gray-500 text-[18px] md:text-[25px]">
          Pro.Beyond.
        </p>

        <h1 className="text-[40px] sm:text-[60px] md:text-[96px] font-thin text-white leading-tight">
          IPhone 14 <span className="font-semibold">Pro</span>
        </h1>

        <p className="text-[14px] md:text-[18px] text-gray-500">
          Created to change everything for the better. For everyone
        </p>

        <button className="w-[160px] md:w-[191px] h-[48px] md:h-[56px] border border-white rounded-xl text-white mx-auto md:mx-0">
          Shop now
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-full flex justify-center md:justify-end">
        <img 
          src={Iphone.src} 
          alt="Iphone"
          className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] object-contain"
        />
      </div>

    </div>
  );
};

export default Banner