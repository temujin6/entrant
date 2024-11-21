import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#154185]">
        <div className="sm:flex block sm:mx-auto container sm:py-16 py-10 justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/footer-muis.png"
                alt="logoWhite"
                className="w-40 sm:w-60"
              />
            </div>
          </div>

          <div className="space-y-5 sm:block hidden">
            <h1 className="text-white text-lg flex justify-center font-semibold uppercase">
              Холбоосууд
            </h1>
            {[
              "БАЙГАЛЬ ЭХ ЛИЦЕЙ АХЛАХ СУРГУУЛЬ, ЭКОЛОГИЙН БОЛОВСРОЛЫН ТӨВ",
              "Дотоод дүрэм журам",
              "Захиргааны зөвлөлийн мэдээлэл",
              "Ажлын байр",
              "Дотуур утасны жагсаалт",
              "Диплом шалгах",
              "Тэтгэлэг",
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src="/list.png" alt="" className="w-4" />
                <a
                  className="text-sm w-[284px] text-opacity-40 text-white"
                  href="https://elselt.num.edu.mn/"
                >
                  {text}
                </a>
              </div>
            ))}
          </div>
          <div className="text-white space-y-5 sm:mt-0 mt-10">
            <h1 className="text-white text-lg font-semibold uppercase flex justify-center">
              Холбоо барих
            </h1>
            {[
              "Их сургуулийн гудамж - 1, Бага тойруу, Сүхбаатар дүүрэг, Улаанбаатар",
              "75754400, 77307730-1163",
              "news@num.edu.mn",
              "https://www.facebook.com/MUIS1942",
              "https://twitter.com/num_edu",
              "https://www.youtube.com/channel/UCfWHF5c7a",
            ].map((contact, index) => (
              <a
                href="https://elselt.num.edu.mn/"
                key={index}
                className="text-sm w-[284px] text-opacity-40 text-white flex cursor-pointer"
              >
                {contact}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:mx-auto mx-8 container sm:flex py-2 text-[#154185] text-sm justify-center items-center sm:m-0 m-2">
        <p>
          © 2024 МОНГОЛ УЛСЫН ИХ СУРГУУЛЬ, МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ГАЗАР
        </p>
      </div>
    </>
  );
};

export default Footer;
