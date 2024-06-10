import React, { useState } from 'react';
import FormRow from './FormRow';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUserWithUid, insertUserData, login } from './authentication';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './AuthSlice';
import MessageTopup from '../../layout/MessageTopup';

function Login() {
  const [emailForm, setEmail] = useState('');
  const [passwordForm, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUser() {
    const confirmation = await login(emailForm, passwordForm);
    if (confirmation.error) {
      console.log(confirmation.error.message);
      setType(confirmation.error.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    const {
      address,
      city,
      password,
      email,
      familyName,
      firstName,
      nationality,
      phoneNumber,
      postalCode,
      dateOfBirth,
    } = confirmation.user.user_metadata;

    const userData = {
      address,
      city,
      password,
      email,
      familyName,
      firstName,
      nationality,
      phoneNumber,
      postalCode,
      dateOfBirth,
      userUID: confirmation.user.id,
    };
    console.log(confirmation);
    const data = await getUserWithUid(confirmation.user.id);
    console.log('getUserWithUid:', data);
    const insertingUser = await insertUserData(userData);
    if (insertingUser.error) {
      throw new Error(insertingUser.error.message);
    }
    console.log(insertingUser);
    // getUserWithUid(data.user.id).then((userData) => {
    if (confirmation.user.id) {
      dispatch(
        createUser(
          confirmation.user.user_metadata.firstName,
          confirmation.user.user_metadata.familyName,
          confirmation.user.user_metadata.email,
          confirmation.user.user_metadata.password,
          confirmation.user.user_metadata.address,
          confirmation.user.user_metadata.postalCode,
          confirmation.user.user_metadata.city,
          confirmation.user.user_metadata.nationality,
          confirmation.user.user_metadata.phoneNumber,
          confirmation.user.user_metadata.dateOfBirth,
        ),
      );
      setType('success');
      navigate('/settings');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }
  const user = useSelector((store) => store.user);
  return (
    <>
      {showMessage && (
        <MessageTopup
          message={`${user.firstName} a été connecté avec succès `}
          type={type}
        />
      )}
      <div className=" mx-auto my-auto w-full max-w-sm rounded bg-blue-100 md:max-w-md  ">
        <form className=" mb-4 rounded px-8 pb-8 pt-6 shadow-md">
          <FormRow label="Email">
            <input
              type="text"
              id="prenom"
              value={emailForm}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </FormRow>

          <FormRow label="mot de passe">
            <input
              value={passwordForm}
              type="password"
              id="password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormRow>

          <NavLink to="">
            <button
              type="submit"
              className="mt-8 block w-full bg-[#1b64ac] px-4 py-2 text-white "
              onClick={loginUser}
            >
              Conntectez
            </button>
          </NavLink>
          <div className="mt-8 text-center">
            <p>Première fois? créez votre compte chez nous.</p>
            <NavLink to="/signup">
              <h4 className="text-[#003262]">S'inscrire</h4>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
