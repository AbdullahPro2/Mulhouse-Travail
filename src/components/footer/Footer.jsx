import React from 'react';
import Logo from '../../assets/mainLogos/mulhouseTravailMainLogo.svg';
import Github from '../../assets/Footer.jsx/Github.svg';
import Facebook from '../../assets/Footer.jsx/facebook.svg';
import Discord from '../../assets/Footer.jsx/Discord.svg';
import Home from '../../assets/Footer.jsx/home.svg';
import Instagram from '../../assets/Footer.jsx/instagram.svg';
import Linkdin from '../../assets/Footer.jsx/Linkdin.svg';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer
      className="tsm:text-base text-s mt-10 flex flex-col  items-center  justify-center bg-[#81d4fa] p-2 md:grid md:grid-cols-3 md:grid-rows-[1fr_auto_auto] md:text-base lg:pl-[200px] xl:pl-[15.8%]
 xl:text-lg    "
    >
      <div className="mb-4 flex flex-col   md:mb-0 md:h-full md:p-5 ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-40   lg:w-64 " />
        </Link>
      </div>
      <div className=" mb-4 flex w-full list-none flex-wrap items-center justify-center gap-3 text-xs sm:text-sm md:mb-0 md:h-full md:w-full md:flex-col md:gap-8 md:p-5 md:text-base lg:text-lg ">
        <Link to="/jobs">
          <li className="cursor-pointer">Offres d'emploi</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer">Découvrez-nous</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contactez-nous</li>
        </Link>
        <Link to="/postjob">
          <li className="cursor-pointer">Portail Employeur</li>
        </Link>
      </div>
      <ul className=" mb-4 mt-4 flex w-full list-none flex-wrap items-center justify-center gap-3 text-xs sm:mt-0 sm:text-sm md:mb-0 md:h-full md:w-full md:flex-col md:gap-8 md:p-5 md:text-base lg:text-lg ">
        <li className=" cursor-pointer md:w-max">Soutien</li>
        <li className=" cursor-pointer md:w-max">Entreprise</li>
        <li className=" cursor-pointer md:w-max">Conceptions</li>
        <li className=" cursor-pointer md:w-max">
          Politique de confidentialité
        </li>
      </ul>

      <div className="col-span-3 mb-4 mt-5 flex items-center justify-center gap-8  sm:mt-0    md:mb-0 md:gap-20 md:p-5 ">
        <a
          href="https://github.com/AbdullahPro2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            href="https://github.com/AbdullahPro2"
            target="_blank"
            src={Github}
            alt="Social Links images"
            className="w-5 cursor-pointer md:w-9"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulllahnezami"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkdin}
            alt="Social Links images"
            className="w-5 cursor-pointer md:w-9"
          />
        </a>
        <img
          src={Discord}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Instagram}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Facebook}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
      </div>
      <p className="row-start-3 mb-4 text-center text-xs md:mb-0   md:w-max md:p-5 md:text-base lg:text-lg ">
        Mulhouse Travail LLC <span className="bold text-lg ">&copy;</span> Tous
        droits réservés 2024
      </p>

      <p className="col-span-2  row-start-3 mb-4  font-bold text-[#1b64ac] md:mb-0 md:p-5 md:text-right md:text-base  lg:text-lg">
        Fait par Abdullah
      </p>
    </footer>
  );
}

export default Footer;
