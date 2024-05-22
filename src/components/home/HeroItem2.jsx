import React from 'react';
import heroItemImg from '../../assets/heroSection/hero2Image.png';
import { NavLink } from 'react-router-dom';

function HeroItem2() {
  return (
    <div className=" flex  h-[280px] justify-between bg-gradient-to-r from-[#5E60CE]  to-[#CCCCFF] sm:h-[370px] md:h-[470px] ">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2  sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base uppercase tracking-[9%]   xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Trouvons ensemble votre
          <br />
          <span className="font-black tracking-[9%] text-[#CCCCFF]">
            EMPLOI IDÉAL <br />
          </span>
        </h1>
        <p className="text-[10px] xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Connectez-vous avec des candidats, et franchissez la prochaine étape
          vers une vie professionnelle épanouissante.
        </p>
        <NavLink to="/postjob">
          <button className="mt-3  w-fit rounded-[90px] bg-[#CCCCFF] px-2 py-[5px] text-xs font-semibold  sm:text-lg lg:px-4 lg:py-3 lg:text-xl xl:px-5 xl:py-4 ">
            Trouve maintenant
          </button>
        </NavLink>
      </div>
      <div className="mx-auto mb-4 flex max-h-[70%] max-w-[50%] items-end justify-center overflow-hidden rounded-b-full bg-[#CCCCFF]  md:max-h-[90%]">
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
