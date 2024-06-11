import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getJobByID } from './apiJobs';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../layout/Spinner';

import clockIcon from '../../assets/job/clock.png';
import salaryIcon from '../../assets/job/money.png';
import briefcaseIcon from '../../assets/job/briefcase.png';
import locationIcon from '../../assets/job/location.png';

function Job() {
  const { id } = useParams();
  const setSelectedJob = useOutletContext();

  const { isLoading, data, error } = useQuery({
    queryKey: ['job', id],
    queryFn: () => getJobByID(id),
  });

  if (isLoading) return <Spinner />;
  return (
    <div className=" my-4 rounded-lg bg-white shadow-2xl md:max-h-[1380px] lg:max-h-[1330px] xl:max-h-[1270px]">
      <div className="border-b-2 p-5">
        <h2 className="text-3xl font-bold text-stone-800">
          {data[0].jobTitle}
        </h2>
        <p className=" mt-1 text-stone-800 underline underline-offset-4">
          {data[0].companyName}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-stone-800">
          Description du entreprise
        </h3>
        <p className="mt-1 text-base text-gray-700">
          {data[0].companyDescription}
        </p>
        <button className="mt-4 rounded bg-[#1b64ac] px-4 py-2 text-lg font-semibold text-white">
          Postuler maintenant
        </button>
      </div>
      <div className="border-b-2 p-5">
        <h3 className="text-xl font-semibold text-stone-800">
          Description du poste
        </h3>
        <p className="data[0].jobLocation">{data[0].jobDescription}</p>
        <h3 className="mt-2 text-lg font-semibold text-stone-800">
          TES MISSIONS :
        </h3>
        <ul className="mt-1 list-inside list-disc text-gray-700">
          {data[0].strong.split(',').map((profilePoint, index) => (
            <li key={index} className="font-light italic">
              {profilePoint.trim()}
            </li>
          ))}
        </ul>
        <h3 className=" mt-1 text-lg font-semibold text-stone-800">
          Ton Profil :
        </h3>
        <ul className="mt-1 list-inside list-disc text-gray-700">
          {data[0].jobCandidateProfile.split(',').map((profilePoint, index) => (
            <li key={index} className="font-light italic">
              {profilePoint.trim()}
            </li>
          ))}
        </ul>
        <h3 className="mt-2 text-lg font-semibold text-stone-800">
          Qualités du candidat :
        </h3>
        <ul className="mt-1 list-inside list-disc text-gray-700">
          {data[0].jobCandidateQualities.split(',').map((quality, index) => (
            <li key={index} className="font-light italic">
              {quality.trim()}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-2 p-5">
        <h3 className="mt-2 text-xl font-semibold text-stone-800">
          Détails de l'emploi
        </h3>
        <div className="jus mt-4 flex items-center gap-5 ">
          <img src={salaryIcon} className="w-8" alt="job" />
          <div>
            <p className="medium text-lg font-semibold">Salaire</p>
            <span className=" mt-1 inline-block w-auto rounded bg-blue-50 p-1 px-2 text-sm text-gray-800">
              À partir de {data[0].jobSalary}€ par mois
            </span>
          </div>
        </div>

        <div className="jus mt-4 flex items-center gap-5 ">
          <img src={briefcaseIcon} className="w-8" alt="job" />
          <div>
            <p className="medium text-lg font-semibold">Type de poste</p>
            <span className=" mt-1 inline-block w-auto rounded bg-blue-50 p-1 px-2 text-sm text-gray-800">
              {data[0].jobContractType}
            </span>
            <span className=" mt-1 inline-block w-auto rounded bg-blue-50 p-1 px-2 text-sm text-gray-800 md:ml-2">
              Temps partiel
            </span>
          </div>
        </div>
        <div className="jus mt-4 flex items-center gap-5 ">
          <img src={clockIcon} className="w-8" alt="job" />
          <div>
            <p className="medium text-lg font-semibold">Temps de travail</p>
            <span className=" mt-1 inline-block w-auto rounded bg-blue-50 p-1 px-2 text-sm text-gray-800">
              {data[0].jobWorkTime}
            </span>
            <span className="  mt-1 inline-block w-auto rounded bg-blue-50 p-1 px-2 text-sm text-gray-800 md:ml-2">
              Travail en journée
            </span>
          </div>
        </div>
      </div>
      <div className="border-b-2 p-5">
        <h3 className="mt-2 text-xl font-semibold text-stone-800">Lieu</h3>
        <div className="jus mt-4 flex items-center gap-5 ">
          <img src={locationIcon} className="w-8" alt="job" />
          <span className="data[0].jobLocation">{data[0].jobLocation}</span>
        </div>
      </div>
    </div>
  );
}

export default Job;
