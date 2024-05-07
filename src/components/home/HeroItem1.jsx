import React from 'react';
import heroItemImg from '../../assets/heroSection/hero1Image.jpg';
function HeroItem1() {
  return (
    <div className="flex h-[40vh]">
      <div className=" my-auto flex flex-col gap-2 pl-2 ">
        <h1 className=" text-base uppercase tracking-[9%] text-white">
          Lets find your
          <br />
          <span className="font-black tracking-[9%] text-[#FFB84F]">
            DREAM JOB <br />
          </span>
          together
        </h1>
        <p className="text-xs text-white">
          Discover Opportunities, Connect with Employees, and take the next step
          towards a fulfilling work life
        </p>
        <button className="mt-1  w-fit rounded-l-[90px]  bg-[#FFB84F] px-3 py-1  text-xs font-semibold">
          Explore Jobs
        </button>
      </div>
      <img
        src={heroItemImg}
        className="my-auto h-[50%] w-[50%]  rounded-l-[90px] "
      />
    </div>
  );
}

export default HeroItem1;
