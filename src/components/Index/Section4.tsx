import React from "react";

const Section4 = () => {
  return (
    <div className="flex justify-center items-center" id="section4">
      <div className="relative my-10 md:my-20 md:ml-20 transform hover:scale-95 transition duration-200 ease-in-out">
        <img
          src="https://portal.num.edu.mn/img/num-new/library.jpg"
          alt=""
          className="w-full max-w-[800px] shadow-inner opacity-100"
        />
        <div className="absolute border-t-[1.2px] border-l-[1.2px] w-20 h-20 md:w-60 md:h-60 border-white top-2 md:top-6 left-2 md:left-6"></div>
        <div className="text-[20px] md:text-[40px] left-4 md:left-[60px] text-white font-bold z-50 absolute top-4 md:top-[60px]">
          <p>МУИС-ИЙН ОЮУТАН</p>
          <p className="text-[#feb902] mt-2 md:mt-4">МОНГОЛЫН ИРЭЭДҮЙ</p>
        </div>
        <div className="absolute border-b-[1.2px] border-r-[1.2px] w-20 h-20 md:w-60 md:h-60 border-white bottom-2 md:bottom-6 right-2 md:right-6"></div>
      </div>
    </div>
  );
};

export default Section4;
