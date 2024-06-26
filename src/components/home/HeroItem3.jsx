import React from 'react';
import heroItemImg from '../../assets/heroSection/hero3image.svg';
import { NavLink } from 'react-router-dom';
function HeroItem3() {
  return (
    <div className="flex h-[280px]  justify-between bg-gradient-to-r from-[#45B1E8] to-[#88CCE8] sm:h-[370px]  md:h-[470px] ">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2 sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base sm:text-xl lg:text-2xl xl:text-4xl">
          Découvrez ce que disent nos experts sur les <br />
          <span className="font-black uppercase tracking-[9%] text-blue-50">
            meilleurs CV
          </span>
          <br /> & pratiques
        </h1>
        <p className="text-[10px] xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Découvrez nos conseils et astuces pour rédiger un CV qui retient
          l'attention des recruteurs et vous démarque de la concurrence.
        </p>
        <NavLink to="/comment-rédiger-cv">
          <button className="mt-3  w-fit  bg-[#e3f2fd] px-2 py-[5px] text-xs font-semibold  sm:text-lg lg:px-4 lg:py-3 lg:text-xl xl:px-7 xl:py-4 ">
            Savoir plus
          </button>
        </NavLink>
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
