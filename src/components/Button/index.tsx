import React, { useState } from "react";

const Button = () => {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <>
      <div
        className="fixed z-50 bottom-5 cursor-pointer right-5"
        onClick={() => setClick((o) => !o)}
      >
        <img src="/message-icon.png" alt="image" />
      </div>

      {click && (
        <div className="fixed z-50 bottom-16 right-16 rounded-xl border shadow-2xl bg-slate-100 h-1/2 w-1/4">
          <p className="font-bold p-2 underline">Chat</p>
          <img
            src="/sent.svg"
            alt=""
            className="absolute bottom-1 left-1 cursor-pointer z-50 w-8 "
          />
          <input
            type="text"
            className="absolute bottom-0 w-full rounded-xl h-10 p-4 pl-10"
          />
        </div>
      )}
    </>
  );
};

export default Button;
