import React from 'react';
import heroItemImg from '../../assets/heroSection/hero3image.svg';
function HeroItem3() {
  return (
    <div className=" flex h-[40vh] justify-between bg-[#FED8B1] sm:h-[50vh] md:h-[60vh]">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2 sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base uppercase tracking-[9%]    xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Lets find your
          <br />
          <span className="font-black tracking-[9%] text-[#004D40]">
            DREAM JOB <br />
          </span>
          together
        </h1>
        <p className="text-[10px] xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Discover Opportunities, Connect with Employees, and take the next step
          towards a fulfilling work life
        </p>
        <button className="mt-1 w-fit   bg-[#004D40] px-4 py-[5px]  text-sm font-semibold text-white  sm:text-lg  lg:py-3 lg:text-xl xl:px-8 xl:py-4  ">
          Let's go
        </button>
      </div>
      <img
        src={heroItemImg}
        className="my-auto max-h-[70%]  max-w-[50%] rounded-l-full opacity-95"
      />
    </div>
  );
}

export default HeroItem3;
