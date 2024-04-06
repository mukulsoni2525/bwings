import React from 'react';
import study from "../assets/study.jpg";
import Reviews from "./Reviews";
import reviews from '../data';

const SectionTwo = () => {
  return (
    <>
      <div className="w-screen relative h-[80vh] mt-40 flex">
        <div className="w-[70%]  ">
          <img src={study} alt="" className="w-full h-full" />
        </div>
        <div className="w-[60%] h-full absolute right-0  bg-indigo-950 border-l rounded-l-full">
          
         
            <div className="text-center">
              
              <Reviews reviews={reviews}></Reviews>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default SectionTwo