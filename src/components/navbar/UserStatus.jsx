import React from 'react';
import loginLogo from '../../assets/navbar/login.png';
import { NavLink } from 'react-router-dom';
function UserStatus({ setIsOpen }) {
  return (
    <div className="mt-5 flex items-center gap-4 p-4 hover:bg-[#163631c2]">
      <img src={loginLogo} alt="LOGIN LOGO" className="w-8 invert" />
      <NavLink to="login" onClick={() => setIsOpen(false)}>
        <p className="cursor-pointer tracking-widest">Connexion </p>
      </NavLink>
    </div>
  );
}

export default UserStatus;
