import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/mainLogos/mulhouseTravailMainLogo.svg';
function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} alt="Main Logo" className="w-36" />
    </NavLink>
  );
}

export default Logo;
