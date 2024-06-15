import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import FormRow from '../../features/authentication/FormRow';
import { useSelector } from 'react-redux';
import {
  updateAuthUser,
  updateUserData,
} from '../../features/authentication/authentication';

function EditAdress({ setUpdateAddresse, refetch }) {
  const { register, control, handleSubmit } = useForm();
  const user = useSelector((store) => store.user);
  async function onSubmit(userData) {
    try {
      const data = await updateAuthUser(userData);
      console.log('data setting:', data);
      const {
        firstName,
        familyName,
        email,
        password,
        postalCode,
        city,
        streetNumber,
        street,
        nationality,
        phoneNumber,
        dateOfBirth,
      } = data.user.user_metadata;
      const userDataFinal = {
        firstName,
        familyName,
        email,
        password,
        postalCode,
        city,
        streetNumber,
        street,
        nationality,
        phoneNumber,
        dateOfBirth,
        userUID: user.userUID,
      };

      const newData = await updateUserData(user.userUID, userDataFinal);
      console.log('newData', newData);
      setUpdateAddresse(false);
      refetch();
    } catch (error) {
      console.error('Error updating user:', error);
    }
    return console.log('userData: ', userData);
  }
  return (
    <div className="fixed left-[50%] top-[50%] z-50 mx-auto my-auto w-full max-w-sm translate-x-[-50%] translate-y-[-40%] rounded bg-[#83b2ff] md:max-w-md lg:translate-x-[-20%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadow-md" mb-4 rounded px-8 pb-8 pt-6'
      >
        <FormRow label="Rue">
          <input
            defaultValue={user.street}
            type="text"
            id="streetNumber"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('streetNumber')}
          />
        </FormRow>
        <FormRow label="Numero de rue">
          <input
            defaultValue={user.streetNumber}
            type="text"
            id="street"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('street')}
          />
        </FormRow>
        <FormRow label="Code Postal">
          <input
            defaultValue={user.postalCode}
            type="tel"
            id="postalCode"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('postalCode')}
          />
        </FormRow>
        <FormRow label="Ville">
          <input
            defaultValue={user.city}
            type="text"
            id="city"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('city')}
          />
        </FormRow>
        <button
          type="submit"
          className="mt-8 block w-full bg-[#1b64ac] px-4 py-2 text-white "
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}

export default EditAdress;
