import React, { useState } from 'react';
import FormRow from './FormRow';
import { NavLink } from 'react-router-dom';

function Login() {
  const [date, setDate] = useState(new Date());
  return (
    <div className=" mx-auto my-auto w-full max-w-sm rounded bg-green-100 md:max-w-md  lg:-translate-x-[23%]">
      <form className=" mb-4 rounded px-8 pb-8 pt-6 shadow-md">
        <FormRow label="prénom ou Email">
          <input
            type="text"
            id="prenom"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormRow>

        <FormRow label="mot de passe">
          <input
            type="password"
            id="password"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </FormRow>

        <NavLink to="">
          <button
            type="submit"
            className="mt-8 block w-full bg-teal-950 px-4 py-2 text-white "
          >
            Conntectez
          </button>
        </NavLink>
        <div className="mt-8 text-center">
          <p>Première fois? créez votre compte chez nous.</p>
          <NavLink to="/signup">
            <h4 className="text-green-700">S'inscrire</h4>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
