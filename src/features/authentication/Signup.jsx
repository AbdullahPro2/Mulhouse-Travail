import React, { useState } from 'react';
import FormRow from './FormRow';
import { NavLink } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
function Signup() {
  const { date, setDate } = useState('');
  const { register, control, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className=" mx-auto my-auto w-full max-w-sm rounded bg-blue-100 md:max-w-md">
      <form
        className=" mb-4 rounded px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex gap-2">
          <FormRow label="prénom">
            <input
              type="text"
              id="prenom"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('prenom')}
            />
          </FormRow>
          <FormRow label="Nom">
            <input
              type="text"
              id="nom"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('nom')}
            />
          </FormRow>
        </div>
        <FormRow label="Date de naissance ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dob"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value ? dayjs(value) : null}
                  onChange={(newValue) => {
                    const formattedDate = newValue
                      ? dayjs(newValue).format('DD/MM/YYYY')
                      : '';
                    onChange(formattedDate);
                  }}
                  format="DD/MM/YYYY"
                  className="focus:shadow-outline h-[38px] w-full appearance-none rounded bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              )}
            />
          </LocalizationProvider>
        </FormRow>
        <FormRow label="Email">
          <input
            type="email"
            id="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('email')}
          />
        </FormRow>
        <FormRow label="Confirmez Email">
          <input
            type="email"
            id="confirmEmail"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormRow>
        <FormRow label="mot de passe">
          <input
            type="password"
            id="password"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('password')}
          />
        </FormRow>
        <FormRow label="Confirmez mot de passe">
          <input
            type="password"
            id="confirmPassword"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormRow>
        <FormRow label="Adresse">
          <input
            type="text"
            id="adress"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('adress')}
          />
        </FormRow>
        <div className="flex gap-2">
          <FormRow label="Code Postal">
            <input
              type="tel"
              id="postal"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('postal')}
            />
          </FormRow>
          <FormRow label="Ville">
            <input
              type="text"
              id="ville"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('ville')}
            />
          </FormRow>
        </div>
        <FormRow label="Nationalité">
          <input
            type="text"
            id="nationality"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('nationality')}
          />
        </FormRow>
        <FormRow label="Numéro de téléphone">
          <input
            type="tel"
            id="phoneNumber"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('phoneNumber')}
          />
        </FormRow>
        <button
          type="submit"
          className="mt-8 block w-full bg-[#1b64ac] px-4 py-2 text-white "
        >
          Conntectez
        </button>
        <div className="mt-8 text-center">
          <p>Vous avez déjà un compte ?</p>
          <NavLink to="/login">
            <h4 className="text-[#003262]">connectez vous</h4>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Signup;
