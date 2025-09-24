import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import FormRow from './FormRow';
import { useDispatch, useSelector } from 'react-redux';
import supabase from '../../services/supabase';
import { login, insertUserData, getUserWithUid } from './authentication';
import { createUser } from './AuthSlice';
import MessageTopup from '../../layout/MessageTopup';

function Login() {
  const [emailForm, setEmail] = useState('');
  const [passwordForm, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  // Handle magic link on page load
  useEffect(() => {
    async function handleMagicLink() {
      const { error, data } = await supabase.auth.setSessionFromUrl();
      if (error) {
        console.error('Magic link error:', error.message);
        return;
      }

      // Save user data in Redux if first-time login
      const userData = data.user.user_metadata;
      const dbData = await getUserWithUid(data.user.id);
      if (!dbData[0]?.id) {
        await insertUserData({
          ...userData,
          userUID: data.user.id,
        });
      }

      dispatch(
        createUser(
          userData.firstName,
          userData.familyName,
          userData.email,
          userData.password || '',
          userData.postalCode,
          userData.city,
          userData.streetNumber,
          userData.street,
          userData.nationality,
          userData.phoneNumber,
          userData.dateOfBirth,
          data.user.id,
        ),
      );

      setType('success');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);

      navigate('/settings', { replace: true }); // Redirect to clean URL
    }

    handleMagicLink();
  }, [dispatch, navigate]);

  // Handle normal login
  async function loginUser(e) {
    e.preventDefault();

    const confirmation = await login(emailForm, passwordForm);
    if (confirmation.error) {
      setType(confirmation.error.message);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      return;
    }

    const userData = confirmation.user.user_metadata;
    const dbData = await getUserWithUid(confirmation.user.id);
    if (!dbData[0]?.id) {
      await insertUserData({ ...userData, userUID: confirmation.user.id });
    }

    dispatch(
      createUser(
        userData.firstName,
        userData.familyName,
        userData.email,
        userData.password || '',
        userData.postalCode,
        userData.city,
        userData.streetNumber,
        userData.street,
        userData.nationality,
        userData.phoneNumber,
        userData.dateOfBirth,
        confirmation.user.id,
      ),
    );

    setType('success');
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    navigate('/settings');
  }

  return (
    <>
      {showMessage && (
        <MessageTopup
          message={`${user.firstName || 'Utilisateur'} connecté avec succès`}
          type={type}
        />
      )}

      <div className="mx-auto my-auto w-full max-w-sm rounded bg-blue-100 md:max-w-md">
        <form
          onSubmit={loginUser}
          className="mb-4 rounded px-8 pb-8 pt-6 shadow-md"
        >
          <FormRow label="Email">
            <input
              type="email"
              value={emailForm}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:shadow-outline w-full rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="Mot de passe">
            <input
              type="password"
              value={passwordForm}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:shadow-outline w-full rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <button
            type="submit"
            className="mt-8 block w-full bg-[#1b64ac] px-4 py-2 text-white"
          >
            Connectez-vous
          </button>

          <div className="mt-8 text-center">
            <p>Première fois? Créez votre compte.</p>
            <NavLink to="/signup">
              <h4 className="text-[#003262]">S'inscrire</h4>{' '}
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
