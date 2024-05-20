import React from 'react';
import tickMark from '../../assets/contact/tick.png';
import { NavLink } from 'react-router-dom';
function Thankyou() {
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg  p-8 ">
      <img src={tickMark} alt="tick mark " className="mx-auto" />
      <h1 className="mb-6 mt-4 text-center text-3xl font-bold text-[#2c0707]">
        Merci pour votre message !
      </h1>
      <p className="mb-6 text-justify text-lg text-stone-700">
        Votre message a bien été reçu. Je vous répondrai dès que possible. En
        attendant, n'hésitez pas à explorer davantage mon portfolio ou à me
        suivre sur les réseaux sociaux pour des mises à jour.
      </p>
      <div className="flex justify-center">
        <NavLink to="/" className="text-blue-500 hover:underline">
          <button>Retour au portfolio</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Thankyou;
