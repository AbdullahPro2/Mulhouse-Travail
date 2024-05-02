import React from 'react';
import { NavLink } from 'react-router-dom';

function ListItem({ to, list, icon }) {
  return (
    <NavLink to={to} className="flex items-center gap-3 ">
      <img
        className="w-7 brightness-0 invert"
        src={icon}
        alt="icon of navbar"
      />
      <li className="hover-underline-animation duration-300">{list}</li>
    </NavLink>
  );
}

export default ListItem;
