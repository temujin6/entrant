import React, { useEffect, useState } from "react";

const Section9 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://data.num.edu.mn/dataset/e92f508e-6a2d-46f6-b078-a3c99a6c7263/resource/9fccf580-281a-402a-922e-7ee6da187396/download/-2023-autumn.json",
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response: any) => {
        setData(response.json());
      })
      .then((data) => {
        console.log("Fetched Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", data);

  return (
    <div
      className="relative mx-auto container py-[120px] sm:flex block justify-center space-x-40"
      id="section9"
    >
      <div className="">
        <h1 className="font-semibold sm:text-black text-indigo-500 sm:text-2xl text-lg sm:text-start text-center">
          Шинээр элсэгч
        </h1>
        <h1 className="sm:text-[#0053AD] text-black sm:text-[49px] text-[32px] font-bold sm:text-start text-center">
          Ботгоны адал явдал
        </h1>
        <img
          src="/landing-page/horse.png"
          alt="horse"
          className="sm:hidden w-[240px] my-10 mx-auto block"
        />
        <p className="text-sm text-justify sm:mx-0 mx-auto sm:w-[540px] w-[342px] ">
          МУИС-ийн 13 дахь хичээлийн долоо хоног үргэлжилж байна оюутан залуусаа
          ! Одоо бидэнд ахин 3 долоо хоног үлджээ
        </p>
        {/* {data?.map((item) => (
          <div></div>
        ))} */}
      </div>
      <div className="">
        <img src="/botgo.jpg" alt="botgo" className="sm:block hidden" />
      </div>
    </div>
  );
};

export default Section9;
