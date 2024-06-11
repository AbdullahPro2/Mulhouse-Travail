import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeading from '../layout/PageHeading';
import editIcon from '../assets/setting/edit.png';
import SettingItem from '../components/setting/SettingItem';
import NoUserMessage from '../components/setting/NoUserMessage';
import {
  getUserWithUid,
  updateAuthUser,
  updateUserData,
} from '../features/authentication/authentication';
import { useQuery } from '@tanstack/react-query';
import { createUser } from '../features/authentication/AuthSlice';
import MessageTopup from '../layout/MessageTopup';

function Settings() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [type, setType] = useState('');

  const {
    isLoading,
    data: job,
    error,
  } = useQuery(['job', user], () => getUserWithUid(user.userUID), {
    enabled: !!user.userUID, // Only run the query if user.userUID is defined
    onSuccess: (data) => {
      if (data && data.length > 0) {
        const job = data[0];
        // console.log('job : ', job);
        dispatch(
          createUser(
            job.firstName,
            job.familyName,
            job.email,
            job.password,
            job.postalCode,
            job.city,
            job.street,
            job.streetNumber,
            job.nationality,
            job.phoneNumber,
            job.dateOfBirth,
            job.userUID,
          ),
        );
      }
    },
  });
  // console.log('user: ', user);

  async function handleUpdateUser() {
    try {
      const data = await updateAuthUser('zeb16208@gmail.com', '123456');
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
      const userData = {
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
      console.log('NewUserData: ', userData);
      setType('success');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      const newData = await updateUserData(user.userUID, userData);
      console.log('newData', newData);
    } catch (error) {
      console.error('Error updating user:', error);
      setType(error.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }

  if (!user.userUID) return <NoUserMessage />;
  return (
    <>
      {showMessage && (
        <MessageTopup
          message={`données mises à jour avec succès`}
          type={type}
        />
      )}

      <div className="overflow-hidden p-4">
        <PageHeading text="Mon Profil" />
        <div className="mb-4 rounded-lg border-2 border-gray-200 p-4">
          <div className="mb-4 flex justify-between">
            <h2 className="font-medium md:text-lg">Personal Information</h2>
            <button
              className="flex items-center justify-center gap-2"
              aria-label="Edit Personal Information"
              onClick={handleUpdateUser}
            >
              Edit <img src={editIcon} className="w-4" alt="Edit icon" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem upperText="Prénom" lowerText={user.firstName} />
            <SettingItem upperText="Nom" lowerText={user.familyName} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem
              upperText="Date de naissance"
              lowerText={user.dateOfBirth}
            />
            <SettingItem upperText="Age" lowerText={user.age || '18'} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem upperText="Nationalité" lowerText={user.nationality} />
            <SettingItem
              upperText="Numéro téléphone"
              lowerText={user.phoneNumber}
            />
          </div>
        </div>
        <div className="mb-4 rounded-lg border-2 border-gray-200 p-4">
          <div className="mb-4 flex justify-between">
            <h2 className="font-medium">Adresse</h2>
            <button
              className="flex items-center gap-2"
              aria-label="Edit Address"
            >
              Edit <img src={editIcon} className="w-4" alt="Edit icon" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem upperText="Numéro de Rue" lowerText={user.street} />
            <SettingItem upperText="Rue" lowerText={user.streetNumber} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem upperText="Code Postal" lowerText={user.postalCode} />
            <SettingItem upperText="Ville" lowerText={user.city} />
          </div>
        </div>
        <div className="rounded-lg border-2 border-gray-200 p-4">
          <div className="mb-4 flex justify-between">
            <h2 className="font-medium">Sécurité</h2>
            <button
              className="flex items-center gap-2"
              aria-label="Edit Security"
            >
              Edit <img src={editIcon} className="w-4" alt="Edit icon" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SettingItem upperText="Email" lowerText={user.email} />
            <SettingItem upperText="Password" lowerText="*********" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
