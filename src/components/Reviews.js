import React, { useState } from "react";
import Card from "./Card.js";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Reviews(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85%] md:w-[700px] bg-indigo-950 flex flex-col justify-center items-center mt-[18vh] p-8 ml-40 transition-all duration-200 hover:shadow-xl rounded-md">
      <Card review={reviews[index]}></Card>
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

      
    </div>
  );
}

export default Reviews;
