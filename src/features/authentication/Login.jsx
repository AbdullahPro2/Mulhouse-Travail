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
    // 1) User login ka
    const confirmation = await login(emailForm, passwordForm);
    if (confirmation.error) {
      console.log(confirmation.error.message);
      setType(confirmation.error.message);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    // 2) Ka error na we no da user database ta owala
    // 2.1) data roubasa
    const {
      city,
      streetNumber,
      street,
      password,
      email,
      familyName,
      firstName,
      nationality,
      phoneNumber,
      postalCode,
      dateOfBirth,
    } = confirmation.user.user_metadata;

    // 2.2) data joraka
    const userData = {
      city,
      streetNumber,
      street,
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
    // 2.3) confirm ka sa da kho already add nady
    const data = await getUserWithUid(confirmation.user.id);
    if (!data[0]?.id) {
      // 2.4) ka na we add no add ye ka
      const insertingUser = await insertUserData(userData);
      if (insertingUser.error) {
        throw new Error(insertingUser.error.message);
      }
    }
    // 2.5) che add sho os wayechawa redux ta
    dispatch(
      createUser(
        confirmation.user.user_metadata.firstName,
        confirmation.user.user_metadata.familyName,
        confirmation.user.user_metadata.email,
        confirmation.user.user_metadata.password,
        confirmation.user.user_metadata.postalCode,
        confirmation.user.user_metadata.city,
        confirmation.user.user_metadata.streetNumber,
        confirmation.user.user_metadata.street,
        confirmation.user.user_metadata.nationality,
        confirmation.user.user_metadata.phoneNumber,
        confirmation.user.user_metadata.dateOfBirth,
        confirmation.user.id,
      ),
    );
    setType('success');
    navigate('/settings');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
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
