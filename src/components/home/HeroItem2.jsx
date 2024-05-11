import React from 'react';
import heroItemImg from '../../assets/heroSection/hero2Image.png';

function HeroItem2() {
  return (
    <div className=" flex h-[40vh] justify-between bg-[#1A1110] sm:h-[50vh] md:h-[60vh]">
      <div className=" my-auto flex max-w-[50%] flex-col gap-2 pl-2 sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className=" text-base uppercase tracking-[9%] text-white xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Trouvons ensemble votre
          <br />
          <span className="font-black tracking-[9%] text-[#FF8C00]">
            EMPLOI IDÉAL <br />
          </span>
        </h1>
        <p className="text-[10px] text-white xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Connectez-vous avec des candidats, et franchissez la prochaine étape
          vers une vie professionnelle épanouissante.
        </p>
        <button className="mt-3 w-fit rounded-[100px] bg-[#FF8C00] px-4  py-[5px] text-[10px] font-semibold xs:text-sm  sm:text-lg  lg:px-6 lg:py-3 lg:text-xl xl:px-7  ">
          Trouve maintenant
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
