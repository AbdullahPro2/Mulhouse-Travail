import React from 'react';
import mulhouseCover from '../assets/about/mulhouse.jpg';
import peoples from '../assets/about/people.jpg';
import profile from '../assets/about/profile3.jpg';
import PageHeading from '../layout/PageHeading';
function About() {
  return (
    <div className="container mx-auto px-4 ">
      <PageHeading text="À propos de nous" />
      <div className="mb-6 flex justify-center">
        <img
          src={mulhouseCover}
          className="w-full max-w-4xl rounded-lg shadow-lg"
          alt="Mulhouse cover"
        />
      </div>
      <p className="text-center text-lg italic text-gray-600">
        Vue panoramique de Mulhouse, cœur du Grand Est
      </p>

      <div className="mt-10 px-4">
        <PageHeading text="Notre Mission" />
        <h3 className="mb-6 text-center text-2xl font-semibold">
          Faciliter la recherche d'emploi pour tous
        </h3>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="mb-5 text-justify text-lg leading-relaxed md:max-w-[50%]">
            Nous aidons les gens à trouver leur carrière professionnelle en leur
            trouvant l'emploi de leurs rêves. Notre mission est de rendre la
            recherche d'emploi facile pour les habitants de Mulhouse et ceux qui
            souhaitent y travailler. Nous croyons que l'avenir des entreprises
            de Mulhouse est prometteur, car elle est au cœur du Grand Est. Nous
            faisons donc de notre mieux pour vous offrir la profession de vos
            rêves.
          </p>
          <img
            src={peoples}
            alt="About us icons"
            className="mb-5 rounded-lg shadow-lg md:max-w-[45%]"
          />
        </div>
      </div>

      <div className="mt-10 space-y-5 px-4">
        <PageHeading text="Notre Histoire" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <img
            src={profile}
            alt="Abdullah's profile picture"
            className="mx-auto mb-5 rounded-full shadow-lg md:h-96 md:w-96 lg:h-[35rem] lg:w-[30rem] "
          />
          <div className="mb-5 text-justify text-lg leading-relaxed md:max-w-[50%]">
            <h2 className="mb-4 text-2xl font-black tracking-widest text-[#1b64ac]">
              QUi SUIS_JE &darr;
            </h2>
            <div>
              <p>
                Je m'appelle Abdullah, fondateur de Mulhouse Travail. En tant
                qu'étudiant et chercheur d'emploi à Mulhouse, j'ai remarqué que
                les autres sites web où nous pouvions trouver des emplois
                étaient un peu difficiles à utiliser pour de nombreux
                utilisateurs d'après mon expérience. C'est de là que m'est venue
                l'idée de créer un site web convivial, que tout le monde
                pourrait utiliser, naviguer et trouver l'emploi de ses rêves.
                Depuis 2024, nous avons accompli cela et continuerons à le faire
                pour les habitants de Mulhouse.
              </p>
              <button
                type="submit"
                className="send-message mt-4 w-full cursor-pointer rounded border-0 bg-[#1b64ac] px-4 py-2 text-center font-normal leading-loose text-teal-50 md:text-lg lg:mt-16"
              >
                Contactez moi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
