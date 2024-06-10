import React from 'react';
import { useSelector } from 'react-redux';
import PageHeading from '../layout/PageHeading';
import editIcon from '../assets/setting/edit.png';
import SettingItem from '../components/setting/SettingItem';
import NoUserMessage from '../components/setting/NoUserMessage';
import { updateAuthUser } from '../features/authentication/authentication';

function Settings() {
  const user = useSelector((store) => store.user);

  if (user.familyName == '') return <NoUserMessage />;

  async function handleUpdateUser() {
    try {
      const data = await updateAuthUser('syed94908@gmail.com', '123456');
      console.log(data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  return (
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
          <button className="flex items-center gap-2" aria-label="Edit Address">
            Edit <img src={editIcon} className="w-4" alt="Edit icon" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SettingItem
            upperText="Numéro de Rue"
            lowerText={user.streetNumber}
          />
          <SettingItem upperText="Rue" lowerText={user.street} />
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
  );
}

export default Settings;
