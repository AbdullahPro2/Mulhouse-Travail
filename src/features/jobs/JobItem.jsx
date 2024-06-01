import React from 'react';
import { NavLink } from 'react-router-dom';

function JobItem({
  id,
  jobTitle,
  companyName,
  location,
  salary,
  workTime,
  description,
  candidateProfile,
  candidateQualities,
  contractType,
  companyDescription,
  strong,
  created_at,
  onSetSelectedJob,
}) {
  function calculateDaysSinceCreated(createdAt) {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  const dateSinceCreated = calculateDaysSinceCreated(created_at);
  console.log(id);
  return (
    <NavLink to={`/jobs/${id}`} onClick={() => onSetSelectedJob(true)}>
      <div className="my-4 max-w-sm overflow-hidden  rounded-lg bg-white shadow-2xl">
        <div className="px-6 py-4">
          <h2 className="mb-2 text-xl font-semibold">{jobTitle}</h2>
          <div className="text-sm text-gray-600">{companyName}</div>
          <div className="mb-4 text-sm text-gray-600">{location}</div>
          <span className=" rounded bg-blue-50 p-1 px-2  text-sm text-gray-600">
            À partir de {salary}€ par mois
          </span>

          <ul className="mt-4 list-inside list-disc text-gray-700">
            {strong.split(',').map((point, index) => (
              <li key={index} className="font-light italic">
                {point.trim()}
              </li>
            ))}
          </ul>

          <div className="flex gap-6">
            <p className="mt-4 text-sm text-gray-600">Annonce</p>
            <p className="mt-4 text-sm text-gray-600">
              Offre publiée il y a{' '}
              {dateSinceCreated == '0' ? '1' : dateSinceCreated} jour
            </p>
          </div>

          {/* <p className="mt-4 text-base text-gray-700">{description}</p>

<div className="mb-2 text-sm text-gray-600">
<span className="font-semibold">Type de contrat :</span>{' '}
{contractType}
</div>

<div className="mb-2 text-sm text-gray-600">
<span className="font-semibold">Temps de travail :</span> {workTime}
</div>
<div className="mb-2 text-sm text-gray-600">
<span className="font-semibold">Profil du candidat :</span>{' '}
{candidateProfile}
</div>
<div className="mb-2 text-sm text-gray-600">
<span className="font-semibold">Qualités du candidat :</span>{' '}
{candidateQualities}
</div>

<div className="mb-4 text-sm text-gray-600">
<span className="font-semibold">Description de l'entreprise :</span>{' '}
{companyDescription}
</div> */}
        </div>
      </div>
    </NavLink>
  );
}

export default JobItem;
