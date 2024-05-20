import React from 'react';
import mulhouseCover from '../assets/about/mulhouse.jpg';
import peoples from '../assets/about/people.jpg';
import profile from '../assets/about/profile3.jpg';
function About() {
  return (
    <div className="">
      <h1 className="my-6 text-center font-black">À propos de nous.</h1>
      <img
        src={mulhouseCover}
        className="mb-6 h-[200px] w-full xs:h-[300px] md:h-[400px] "
        alt="Mulhouse cover "
      />
      <div className=" px-4">
        <h1 className=" text-center font-bold">Notre Mission</h1>
        <h3 className="mb-6 text-center text-2xl font-semibold">
          Faciliter la recherche d'emploi pour tous
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="xl:text:2xl  mb-5 text-justify md:max-w-[50%] md:text-lg md:leading-[2] lg:text-xl lg:leading-[2]">
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
            alt="about us icons "
            className="mb-5 md:max-w-[50%]"
          />
        </div>
      </div>

      <div className="mt-6  space-y-5 px-4 ">
        <h3 className="text-center text-2xl font-semibold">Notre Histoire</h3>

        <div className="flex flex-col md:flex-row md:justify-between">
          <img
            src={profile}
            alt="about us icons"
            className="mx-auto mb-5 h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem] xl:h-[32rem] xl:w-[32rem]"
          />
          <p className="xl:text:2xl  mb-5 text-justify md:max-w-[50%] md:text-lg md:leading-[2] lg:text-xl lg:leading-[2]">
            Je m'appelle Abdullah fondateur de Mulhouse Travail. En tant
            qu'étudiant et chercheur d'emploi à Mulhouse, j'ai remarqué que les
            autres sites web où nous pouvions trouver des emplois étaient un peu
            difficiles à utiliser pour de nombreux utilisateurs d'après mon
            expérience. C'est de là que m'est venue l'idée de créer un site web
            convivial, que tout le monde pourrait utiliser, naviguer et trouver
            l'emploi de ses rêves. Depuis 2024, nous avons accompli cela et
            continuerons à le faire pour les habitants de Mulhouse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
