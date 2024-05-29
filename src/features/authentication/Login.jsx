import React, { useEffect, useState } from 'react';
import FormRow from './FormRow';
import { NavLink } from 'react-router-dom';
import { getUserWithUid, login } from './authentication';

import { useDispatch } from 'react-redux';
import { createUser } from './AuthSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function loginUser() {
    login(email, password).then((data) => {
      console.log('first', data);
      getUserWithUid(data.user.id).then((userData) => {
        console.log('second', userData);
        dispatch(
          createUser(
            userData[0].firstName,
            userData[0].familyName,
            userData[0].email,
            userData[0].password,
            userData[0].address,
            userData[0].postalCode,
            userData[0].city,
            userData[0].nationality,
            userData[0].phoneNumber,
            userData[0].dateOfBirth,
          ),
        );
      });
    });
  }

  return (
    <div className=" mx-auto my-auto w-full max-w-sm rounded bg-blue-100 md:max-w-md  ">
      <form className=" mb-4 rounded px-8 pb-8 pt-6 shadow-md">
        <FormRow label="Email">
          <input
            type="text"
            id="prenom"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormRow>

        <FormRow label="mot de passe">
          <input
            value={password}
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
  );
}

export default Login;
