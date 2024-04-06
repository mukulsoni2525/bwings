import React from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <>
      <div className="w-full h-[95vh] bg-sky-50">
        <div className="h-[35vh] w-screen flex items-center justify-center text-[11vh] styling  font-bold ">
          <h1 className="max-w-[50vw] mt-8 text-center">
            We collaborate with 200+ companies
          </h1>
        </div>
        <div className="h-[60vh] w-screen  flex justify-center items-center space-x-20 relative">
          <div className="h-[55%] w-[10%] border-t border-b rounded-t-full rounded-b-full  bg-white flex items-center justify-center border-sky-200 border absolute left-[12%]">
            <img src={image1} alt="" />
          </div>
          <div className="h-[55%] w-[10%] border-t border-b rounded-t-full rounded-b-full  bg-white flex items-center justify-center border-sky-200 border absolute top-[14%] left-[22%]">
            <img src={image2} alt="" />
          </div>
          <div className="h-[55%] w-[10%] border-t border-b rounded-t-full rounded-b-full  bg-white flex items-center justify-center border-sky-200 border absolute top-[10%] left-[37%]">
            <img src={image3} alt="" />
          </div>
          <div className="h-[55%] w-[10%] border-t border-b rounded-t-full rounded-b-full  bg-white flex items-center justify-center border-sky-200 border absolute top-[14%] left-[52%]">
            <img src={image4} alt="" />
          </div>
          <div className="h-[55%] w-[10%] border-t border-b rounded-t-full rounded-b-full  bg-white flex items-center justify-center border-sky-200 border absolute  left-[67%]">
            <img src={image5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree