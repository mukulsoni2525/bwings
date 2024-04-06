import React from 'react';
import logo from "../assets/logo.jpeg"
import buisnessman from "../assets/buisnessman.png";
import graph from "../assets/graph.png";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r  from-slate-50 via-cyan-100 to-cyan-50 relative h-screen w-screen">
        <div className="pl-20 pt-10">
          <img src={logo} alt="" className="w-[10vw] h-[7vh]" />
        </div>

        <div className="ml-20 mt-20">
          <h1 className="uppercase text-indigo-600 border rounded-3xl p-1 bg-white w-[20vw] font-semibold shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] text-center text-xl">
            We are expert in this field
          </h1>

          <h1 className="text-slate-700  text-[50px] pt-6 max-w-[29vw] font-bold leading-[55px]">
            Get smart way for your business
          </h1>
          <p className="text-stone-500 pt-10 max-w-[36vw] font-semibold text-[20px]">
            Lasted hunted enough an up seeing in lively letter. Had judgment out
            opinions property the supplied.
          </p>

          <button className="bg-gradient-to-r from-teal-600 to-sky-500 uppercase border rounded-xl text-white text-2xl p-2 mt-8 font-semibold">
            chat on whatsapp
          </button>
        </div>

        <div className="absolute right-[10vw] bottom-2 ">
          <img
            src={buisnessman}
            alt=""
            className="max-h-[95vh] lg:w-[50vw] md:w-[44vw]"
          />
        </div>

        <div className="bg-gradient-to-r flex flex-col items-center justify-center from-teal-600 to-sky-500 border rounded-xl xl:w-[12vw] xl:h-[25vh] md:w-[10vw] md:h-[20vh] text-center text-white text-2xl font-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute right-[40vw] bottom-[25vh]">
          +32.88% <br></br> Review
        </div>

        <div className="absolute bottom-[-15vh] right-[7vw]  ">
          <img src={graph} alt="" className="w-[28vw] h-[23vh]" />
        </div>
      </div>
    </>
  );
}

export default Hero