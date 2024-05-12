import React from 'react';
import heroItemImg from '../../assets/heroSection/hero3image.svg';
function HeroItem3() {
  return (
    <div className=" flex h-[40vh] justify-between bg-[#FED8B1] sm:h-[50vh] md:h-[60vh]">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2 sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base  tracking-[9%]    xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Découvrez ce que disent nos experts sur les <br />
          <span className="font-black uppercase tracking-[9%] text-[#004D40]">
            meilleurs CV
          </span>
          <br /> & pratiques
        </h1>
        <p className="text-[10px] xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Découvrez nos conseils et astuces pour rédiger un CV qui retient
          l'attention des recruteurs et vous démarque de la concurrence.
        </p>
        <button className="mt-3  w-fit   bg-[#004D40] px-4 py-[5px]  text-sm font-semibold text-white  sm:text-lg  lg:py-3 lg:text-xl xl:px-8 xl:py-4  ">
          Savoir plus
        </button>
      </div>
      <img
        src={heroItemImg}
        className="my-auto max-h-[70%]  max-w-[50%]"
        alt="Hero section "
      />
    </div>
  );
}

export default HeroItem3;
