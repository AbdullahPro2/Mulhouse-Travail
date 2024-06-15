import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormRow from '../../features/authentication/FormRow';
import { useSelector } from 'react-redux';
import {
  updateAuthUserEmailPass,
  updateUserData,
} from '../../features/authentication/authentication';
import MessageTopup from '../../layout/MessageTopup';

function EditSecurity({ setUpdateSecurity, refetch }) {
  const [showMessage, setShowMessage] = useState(false);
  const [type, setType] = useState('');
  const { register, control, handleSubmit } = useForm();
  const user = useSelector((store) => store.user);
  async function onSubmit(userData) {
    if (userData.password !== userData.confirmPassword) {
      console.log(userData.confirmPassword, '!==', userData.password);
      setType('Les mots de passe ne sont pas identiques');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return null;
    }
    console.log('USER: ', user);
    try {
      const data = await updateAuthUserEmailPass(userData);
      console.log('updateAuthUserEmailPass:', data);
      const {
        firstName,
        familyName,
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
        email: userData.email,
        password: userData.password,
        postalCode,
        city,
        streetNumber,
        street,
        nationality,
        phoneNumber,
        dateOfBirth,
        userUID: user.userUID,
      };
      console.log('userDataFinial:', userDataFinal);

      const newData = await updateUserData(user.userUID, userDataFinal);
      console.log('newData from API', newData);
      setUpdateSecurity(false);
      refetch();
    } catch (error) {
      console.error('Error updating user:', error);
      setType(error.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    return console.log('userData: ', userData);
  }
  return (
    <>
      {showMessage && (
        <MessageTopup message={`Eail changed sucessfully`} type={type} />
      )}
      <div className="fixed left-[50%] top-[50%] z-50 mx-auto my-auto w-full max-w-sm translate-x-[-50%] translate-y-[-40%] rounded bg-[#83b2ff] md:max-w-md lg:translate-x-[-20%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='shadow-md" mb-4 rounded px-8 pb-8 pt-6'
        >
          <FormRow label="Nouveau Email">
            <input
              type="email"
              id="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              {...register('email')}
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
              {...register('confirmPassword')}
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
    </>
  );
}

export default EditSecurity;
