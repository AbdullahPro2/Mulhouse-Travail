import React from 'react';
import successImage from '../../assets/CVSection/22378313_6566478.svg';
import { NavLink } from 'react-router-dom';
import PageHeading from '../../layout/PageHeading';

function CVSection() {
  return (
    <div className="mt-24 px-4">
      <PageHeading text="Comment rédiger un CV gagnant ?" />
      <div className="gap-10 md:flex md:items-center md:justify-center">
        <img
          src={successImage}
          alt="CV Section"
          className="mx-auto mt-7 xs:w-[80%] md:w-1/2 lg:w-[400px]"
        />
        <div className="mt-7 space-y-4 md:w-1/2">
          <h3 className="mt-10 text-justify text-lg font-medium lg:text-2xl xl:font-semibold">
            Un CV gagnant devrait présenter les caractéristiques suivantes :
          </h3>
          <ul className="space-y-3 text-emerald-950 lg:text-lg xl:space-y-4 xl:text-xl">
            <li>1. Créer un en-tête avec vos coordonnées de contact</li>
            <li>2. Rédiger un résumé professionnel</li>
            <li>3. Détailler votre formation</li>
            <li>4. Présenter votre expérience professionnelle</li>
            <li>5. Enumérer vos compétences pertinentes</li>
            <li>6. Décrire vos centres d'intérêt personnels</li>
            <li>7. Inclure des sections supplémentaires si nécessaires</li>
          </ul>
          <NavLink to="/comment-rédiger-cv">
            <button className="mt-7 inline-block rounded-md bg-[#1b64ac] px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-[#15528c] sm:text-lg lg:px-6 lg:py-3 lg:text-xl xl:px-7 xl:py-4">
              Savoir Plus!
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CVSection;
