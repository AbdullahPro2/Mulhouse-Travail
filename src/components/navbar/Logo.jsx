import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/mainLogos/mulhouseTravailLogo.png';

function Logo() {
  return (
    <NavLink to="/Mulhouse-Travail/">
      <img src={logo} alt="Main Logo" className="w-20" />
    </NavLink>
  );
}

export default Logo;
