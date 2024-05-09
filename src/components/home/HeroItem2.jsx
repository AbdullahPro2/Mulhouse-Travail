import React from 'react';
import heroItemImg from '../../assets/heroSection/hero2Image.png';

function HeroItem2() {
  return (
    <div className=" flex h-[40vh] justify-between bg-[#1A1110] sm:h-[50vh] md:h-[60vh]">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2 sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base uppercase tracking-[9%] text-white xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Lets find your
          <br />
          <span className="font-black tracking-[9%] text-[#FF8C00]">
            DREAM JOB <br />
          </span>
          together
        </h1>
        <p className="text-[10px] text-white xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Discover Opportunities, Connect with Employees, and take the next step
          towards a fulfilling work life
        </p>
        <button className="mt-1 w-fit  rounded-br-[20px] rounded-tl-[20px] bg-[#FF8C00] px-4  py-[5px] text-sm font-semibold  sm:text-lg  lg:py-3 lg:text-xl xl:px-5 xl:py-4 ">
          Let's go
        </button>
      </div>
      <div className="mx-auto mb-4 flex max-h-[70%] max-w-[50%] items-end justify-center overflow-hidden rounded-b-full bg-[#FF8C00] md:max-h-[90%]">
        <img
          src={heroItemImg}
          alt="hero section item 2 "
          className=" max-h-[100%] max-w-[100%]"
        />
      </div>
    </div>
  );
}

export default HeroItem2;
