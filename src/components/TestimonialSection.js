import React from 'react';
import Testimonial from './Testimonial';
import line from "../assets/line.png"

const TestimonialSection = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-tr from-teal-400 to-blue-700">
        <div className="text-center flex flex-col items-center justify-center mt-10 mb-10">
          <h1 className="text-2xl text-white uppercase "> Testimonials</h1>
          <img src={line} alt="" />
          <h1 className="text-white text-[40px] font-semibold max-w-[35vw]">
            What People say about our Creative Services
          </h1>
        </div>
        <div className="h-[70vh] w-full flex flex-col items-center justify-center">
          <Testimonial></Testimonial>
        </div>
      </div>
    </>
  );
}

export default TestimonialSection