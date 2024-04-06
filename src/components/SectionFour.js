import React from 'react'

const SectionFour = () => {
  return (
    <>
      <div className="w-screen h-[95vh] flex items-center justify-center">
        <div className="w-[75%] h-[60vh] flex flex-col bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 border rounded-lg ">
          <div className="h-[50%] w-full flex flex-col items-center justify-center">
            <h1 className="uppercase text-xl font-bold text-white mt-10">
              Free Trial
            </h1>
            <h1 className="text-[5vh] font-bold text-white mt-4 max-w-[30vw] text-center leading-20">
              Start Your 14 Days Free Trials Today!
            </h1>
          </div>
          <div className="h-[50%] w-full flex flex-col items-center relative">
            <form className="w-full h-full relative flex flex-col items-center">
              <input
                type="text"
                placeholder="YOUR EMAIL"
                className="w-[60%] h-[30%] border rounded-l-full rounded-r-full pl-6"
              />
              <button className="bg-gradient-to-tr absolute right-[20%] top-[3px] from-emerald-300 to-blue-700 w-[15%] h-[26%] border rounded-l-full rounded-r-full text-center text-white">Free Trial</button>
            </form>
            <h1 className='absolute bottom-4 text-black text-3xl font-bold'>b</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour