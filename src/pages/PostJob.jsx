import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormRow from '../features/authentication/FormRow';
import PageHeading from '../layout/PageHeading';
import { insertJob } from '../features/postjob/insertJob';
import MessageTopup from '../layout/MessageTopup';

function PostJob() {
  const [showMessage, setShowMessage] = useState(false);
  const [type, setType] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 10000);
    console.log('Form submitted', data);
    const withId = { id: randomNumber, ...data };

    try {
      const confirmation = await insertJob(withId);

      if (confirmation.error) {
        setType(confirmation.error.message);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      } else {
        setType('success');
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setType(err.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }
  return (
    <>
      {showMessage && (
        <MessageTopup
          message={`Une nouvelle offre d'emploi a été ajoutée avec succès`}
          type={type}
        />
      )}
      <div className="mx-auto my-auto w-full max-w-2xl rounded bg-blue-100 p-8 shadow-md">
        <PageHeading text="CHERCHONS UN EMPLOYÉ" />
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <FormRow label="Intitulé du poste" error={errors.jobTitle}>
            <input
              type="text"
              id="jobTitle"
              {...register('jobTitle', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Description du poste" error={errors.jobDescription}>
            <textarea
              id="jobDescription"
              {...register('jobDescription', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Nom de l'entreprise" error={errors.companyName}>
            <input
              type="text"
              id="companyName"
              {...register('companyName', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow
            label="Description de l'entreprise"
            error={errors.companyDescription}
          >
            <textarea
              id="companyDescription"
              {...register('companyDescription', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Lieu du poste" error={errors.jobLocation}>
            <input
              type="text"
              id="jobLocation"
              {...register('jobLocation', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Type de contrat" error={errors.jobContractType}>
            <input
              type="text"
              id="jobContractType"
              {...register('jobContractType', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Salaire" error={errors.jobSalary}>
            <input
              type="text"
              id="jobSalary"
              {...register('jobSalary', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Temps de travail" error={errors.jobWorkTime}>
            <input
              type="text"
              id="jobWorkTime"
              {...register('jobWorkTime', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow
            label="Profil du candidat"
            error={errors.jobCandidateProfile}
          >
            <textarea
              id="jobCandidateProfile"
              {...register('jobCandidateProfile', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow
            label="Qualités du candidat "
            error={errors.jobCandidateQualities}
          >
            <textarea
              id="jobCandidateQualities"
              {...register('jobCandidateQualities', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Responsabilités" error={errors.strong}>
            <input
              type="text"
              id="strong"
              {...register('strong', { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <button
            type="submit"
            className="mt-8 block w-full bg-[#1b64ac] px-4 py-2 text-white"
          >
            Publier l'offre
          </button>
        </form>
      </div>
    </>
  );
}

export default PostJob;
