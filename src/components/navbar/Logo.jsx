import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/mainLogos/mulhouseTravailMainLogo.svg';
function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} alt="Main Logo" className="w-24 xs:w-36 lg:w-40 " />
    </NavLink>
  );
}

export default Logo;
