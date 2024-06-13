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

function EditPersonal({ setUpdatePersonal, refetch }) {
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
      //   console.log('NewUserData: ', userDataFinal);
      // setType('success');
      // setShowMessage(true);
      // setTimeout(() => {
      //   setShowMessage(false);
      // }, 2000);
      const newData = await updateUserData(user.userUID, userDataFinal);
      console.log('newData', newData);
      setUpdatePersonal(false);
      refetch();
    } catch (error) {
      console.error('Error updating user:', error);
      //   setType(error.message);
      //   setShowMessage(true);
      //   setTimeout(() => {
      //     setShowMessage(false);
      //   }, 2000);
    }
    return console.log('userData: ', userData);
  }
  return (
    <div className="absolute left-[50%] top-[50%] z-50 mx-auto my-auto w-full max-w-sm translate-x-[-50%] translate-y-[-40%] rounded bg-[#83b2ff] md:max-w-md lg:translate-x-[-20%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadow-md" mb-4 rounded px-8 pb-8 pt-6'
      >
        <div className=" flex gap-2">
          <FormRow label="prénom">
            <input
              type="text"
              id="firstName"
              defaultValue={user.firstName}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('firstName')}
            />
          </FormRow>
          <FormRow label="Nom">
            <input
              defaultValue={user.familyName}
              type="text"
              id="familyName"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('familyName')}
            />
          </FormRow>
        </div>
        <FormRow label="Date de naissance ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dateOfBirth"
              defaultValue={user.dateOfBirth}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value ? dayjs(value, 'DD/MM/YYYY') : null}
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
        <FormRow label="Nationalité">
          <input
            type="text"
            id="nationality"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('nationality')}
            defaultValue={user.nationality}
          />
        </FormRow>
        <FormRow label="Numéro de téléphone">
          <input
            type="tel"
            id="phoneNumber"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register('phoneNumber')}
            defaultValue={user.phoneNumber}
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

export default EditPersonal;
