import React from 'react';
import heroItemImg from '../../assets/heroSection/hero1Image.jpg';
function HeroItem1() {
  return (
    <div className="flex h-[40vh] justify-between bg-[#2E8B57] sm:h-[50vh] md:h-[60vh]">
      <div className="my-auto flex flex-col gap-2 pl-2 sm:max-w-[50%] sm:gap-3 sm:px-3 md:gap-4 lg:px-5 xl:gap-6 xl:px-8">
        <h1 className="text-base uppercase tracking-[9%] text-white xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">
          Ensemble, trouvons
          <br />
          <span className="font-black tracking-[9%] text-[#FFB84F]">
            l'emploi de vos rêves !
          </span>
        </h1>
        <p className="text-[10px] text-white xs:text-xs sm:text-base lg:text-lg xl:text-xl">
          Découvrez des opportunités et franchissez la prochaine étape vers une
          carrière épanouissante.
        </p>
        <button className="mt-3  w-fit rounded-l-[90px] bg-[#FFB84F] px-2 py-[5px] text-xs font-semibold sm:text-lg lg:px-4 lg:py-3 lg:text-xl xl:px-5 xl:py-4">
          Explorer les offres
        </button>
      </div>
      <img
        src={heroItemImg}
        className="my-auto max-h-[70%]  max-w-[50%] rounded-l-full opacity-95 "
      />
    </div>
  );
}

export default HeroItem1;
