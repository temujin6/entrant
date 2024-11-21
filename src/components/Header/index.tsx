import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId!);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="bg-white flex items-center h-20 shadow-xl">
      <div className="fixed flex items-center justify-center w-full bg-white h-20  z-50 2xl:space-x-96 xl:space-x-44">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center sm:ml-0 pr-20 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="https://portal.num.edu.mn/img/num-new/logo-blue.png"
              alt="logo"
              className="h-10"
            />
            <h1 className="pl-4 text-[14px] sm:text-[18px] font-extrabold text-[#0053AD] uppercase">
              Монгол улсын их сургууль
            </h1>
          </div>
          <div className="space-x-6 sm:flex ml-14 hidden">
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section1"
            >
              Нүүр
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section2"
            >
              Түгээмэл асуулт
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section4"
            >
              Бидний тухай
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section6"
            >
              Элсэлтийн үйл явц
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section8"
            >
              Cургууль
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section9"
            >
              Ботго
            </p>
          </div>
          <a
            href="https://www.facebook.com/www.num.edu.mn"
            className="sm:flex items-center hidden"
          >
            <div className="border-l border-[#0053AD] h-8 mx-4"></div>
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
