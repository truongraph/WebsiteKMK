import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className=" h-screen w-full flex items-center justify-center text-center">
      {loading ? (
        <div className="loader-container bg-[#111722]">
          <div>
            <img src="/whitelogonotext.png" alt="Logo" className="w-[70px]" />
          </div>
        </div>
      ) : (
        <div className="relative font-inter h-screen w-full flex items-center justify-center text-center bg-[#111722]">
          <div className="z-50 flex flex-col justify-center items-center text-white w-full h-screen space-y-5 px-5">
            <img
              src="/whitelonglogo.png"
              alt=""
              className="absolute w-72 top-[50px]"
            />
            <div>
              <span className="title text-[35px] lg:text-[70px]">
                {" "}
                KMK TECHNOLOGY{" "}
              </span>
              <h1 className="font-extrabold text-[40px] lg:text-[100px] relative top-[-15px]  lg:top-[-35px] tracking-wide">
                COMING SOON
              </h1>
              <p className=" text-[17px] relative top-[-15px]  lg:top-[-40px] tracking-wide block m-auto">
                KMK we are in the process of building a website. We will appear
                soon and bring you good experiences
              </p>
              <a
                className="bg-blue-700 hover:bg-blue-900 px-10 py-3 rounded-full relative top-[10px]  lg:top-[0px]"
                href="mailto:kmk@kmk-tech.vn"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
