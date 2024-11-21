import React from "react";

const Section1 = () => {
  return (
    <div className="relative" id="section1">
      <img
        src="/muis-image.jpg"
        alt="home"
        className="w-full 2xl:h-[797px] h-[615px] object-cover bg-center"
      />
      <div className="absolute sm:flex justify-between items-center top-0 sm:bg-gradient-to-l bg-gradient-to-b from-gray-200 from-40% via-gray-200 via-10% 2xl:h-[797px] h-[615px] w-full">
        <div className="absolute right-10">
          <div className="mb-16 mt-10 sm:mt-0 ml-14 sm:ml-0 space-y-6">
            <p className="uppercase 2xl:text-4xl text-2xl sm:text-3xl font-bold">
              Элсэгчдэд туслах 
              <br />
              <span className="uppercase text-[#0053AD]">
                веб
              </span> МУИС-ЫН{" "}
              <span className="uppercase text-[#0053AD]">ОЮУТАН</span>
            </p>
          
          </div>
        </div>
        <div className="mx-auto">{/* Placeholder for future content */}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute bottom-[-35px] sm:bottom-[-65px] bg-white rounded-xl shadow-xl sm:w-[696px] sm:h-[128px] h-[65px] w-[350px] flex justify-center items-center ">
          <div className="flex justify-center items-center space-x-3 mr-4 sm:mr-20 ">
            <img
              src="/user.svg"
              alt="user"
              className="sm:w-12 w-8 sm:h-12 h-8"
            />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">18 140</p>
              <p>Оюутан</p>
            </div>
          </div>
          <div className="flex space-x-3 mr-4 items-center sm:mr-20">
            <img src="/map.svg" alt="map" className="sm:w-12 w-8 sm:h-12 h-8" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">1 442</p>
              <p>Багш ажилчид</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/sent.svg"
              alt="sent"
              className="sm:w-12 w-8 sm:h-12 h-8"
            />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">43</p>
              <p>Тэнхим</p>
            </div>
          </div>

          <div>
            <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
            <script src="https://files.bpcontent.cloud/2024/11/21/05/20241121050850-XWKJZWGA.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

  
