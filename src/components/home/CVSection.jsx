import React from 'react';
import successImage from '../../assets/CVSection/22378313_6566478.svg';
import { NavLink } from 'react-router-dom';

function CVSection() {
  return (
    <div className="mt-24 px-3">
      <h1 className="text-center text-2xl font-black tracking-widest text-[#004D40] lg:text-3xl">
        Comment rédiger un CV gagnant ?
      </h1>
      <div className="md:flex md:items-center md:justify-center ">
        <img
          src={successImage}
          alt="CV Section"
          className="mx-auto mt-7 xs:w-[80%] md:w-1/2 lg:w-[400px] "
        />
        <div className="mt-7 space-y-3 md:w-1/2 ">
          <h3 className="mt-10 text-justify text-lg font-medium lg:text-2xl">
            Un CV gagnant devrait présenter les caractéristiques suivantes :
          </h3>
          <ul className="space-y-2 text-emerald-950 lg:text-lg">
            <li>1. Créer un en-tête avec vos coordonnées de contact</li>
            <li>2. Rédiger un résumé professionnel</li>
            <li>3. Détailler votre formation</li>
            <li>4. Présenter votre expérience professionnelle</li>
            <li>5. Enumérer vos compétences pertinentes</li>
            <li>6.Décrire vos centres d'intérêt personnels nécessaire</li>
            <li>7. Inclure des sections supplémentaires si</li>
          </ul>
          <NavLink to="how-to-write-cv">
            <button className="mx-auto mt-8 block bg-teal-950 px-4 py-2 text-white md:mx-0">
              Savoir Plus!
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CVSection;
