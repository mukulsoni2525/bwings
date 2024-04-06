import React, { useState } from "react";

import user from "../assets/user.png";
import partition from "../assets/partition.png";

import Symbol from "../assets/Symbol.png";
import quote from "../assets/quote.png";  

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "nuka-carousel";




function Testimonial() {
    

    return (
      <>
        {/* <Card review={reviews[index]}></Card> */}

        <div className="flex flex-col items-center justify-center w-[80%]">
          <Carousel autoplay={true} autoplayInterval={2000} withoutControls={true} slideIndex={true}>
            <div className="w-[100%] h-[80%] flex items-center justify-center ">
              <div className="w-[30%] h-[90%] flex items-center justify-center ">
                <img src={user} alt="" className="w-[210px] h-[250px]" />
              </div>
              <div className="h-full">
                <img src={partition} alt="" className="w-[2vw] h-full" />
              </div>

              <div className="w-[68%] h-full bg-transparent">
                <div className="flex  space-x-10 mt-10">
                  <h1 className="text-2xl font-semibold ml-20 text-white">
                    Design Quality
                  </h1>
                  <div className="flex justify-center items-center">
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                  </div>
                </div>

                <div className="ml-20 mt-10">
                  <p className="max-w-[40vw] text-xl text-white">
                    Otherwise concealed favourite frankness on be at dashwoods
                    mentions defective at. Sympathize interested simplicity at
                    do projecting care effect increasing terminated. As edward
                    settle limits at in. Chamber reaching abnormally nothing be
                    accesing to the point. very extreme future.
                  </p>
                </div>

                <div className="flex space-x-4 ml-20 mt-10">
                  <img src={quote} alt="" />
                  <div className="text-white">
                    <h1 className="text-xl font-semibold">Aditya Trivedi</h1>
                    <h3>Managing Director</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%] h-[80%] flex items-center justify-center">
              <div className="w-[30%] h-[90%] flex items-center justify-center ">
                <img src={user} alt="" className="w-[210px] h-[250px]" />
              </div>
              <div className="h-full">
                <img src={partition} alt="" className="w-[2vw] h-full" />
              </div>

              <div className="w-[68%] h-full bg-transparent">
                <div className="flex  space-x-10 mt-10">
                  <h1 className="text-2xl font-semibold ml-20 text-white">
                    Design Quality
                  </h1>
                  <div className="flex justify-center items-center">
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                  </div>
                </div>

                <div className="ml-20 mt-10">
                  <p className="max-w-[40vw] text-xl text-white">
                    Otherwise concealed favourite frankness on be at dashwoods
                    mentions defective at. Sympathize interested simplicity at
                    do projecting care effect increasing terminated. As edward
                    settle limits at in. Chamber reaching abnormally nothing be
                    accesing to the point. very extreme future.
                  </p>
                </div>

                <div className="flex space-x-4 ml-20 mt-10">
                  <img src={quote} alt="" />
                  <div className="text-white">
                    <h1 className="text-xl font-semibold">Aditya Trivedi</h1>
                    <h3>Managing Director</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%] h-[80%] flex items-center justify-center">
              <div className="w-[30%] h-[90%] flex items-center justify-center ">
                <img src={user} alt="" className="w-[210px] h-[250px]" />
              </div>
              <div className="h-full">
                <img src={partition} alt="" className="w-[2vw] h-full" />
              </div>

              <div className="w-[68%] h-full bg-transparent">
                <div className="flex  space-x-10 mt-10">
                  <h1 className="text-2xl font-semibold ml-20 text-white">
                    Design Quality
                  </h1>
                  <div className="flex justify-center items-center">
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                    <img src={Symbol} alt="" className="h-[2vh]" />
                  </div>
                </div>

                <div className="ml-20 mt-10">
                  <p className="max-w-[40vw] text-xl text-white">
                    Otherwise concealed favourite frankness on be at dashwoods
                    mentions defective at. Sympathize interested simplicity at
                    do projecting care effect increasing terminated. As edward
                    settle limits at in. Chamber reaching abnormally nothing be
                    accesing to the point. very extreme future.
                  </p>
                </div>

                <div className="flex space-x-4 ml-20 mt-10">
                  <img src={quote} alt="" />
                  <div className="text-white">
                    <h1 className="text-xl font-semibold">Aditya Trivedi</h1>
                    <h3>Managing Director</h3>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </>
    );
    
}

export default Testimonial;