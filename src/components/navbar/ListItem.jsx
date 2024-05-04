import React from 'react';
import { NavLink } from 'react-router-dom';

function ListItem({
  to,
  list,
  icon,
  isOpen,
  delay,
  setIsOpen = { setIsOpen },
}) {
  return (
    <NavLink
      to={to}
      className={`flex items-center gap-3  px-4 py-1 transition-transform duration-200 ease-in-out ${isOpen ? `translate-x-0` : ' -translate-x-full'} `}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => setIsOpen(false)}
    >
      <img
        className="w-7 brightness-0 invert"
        src={icon}
        alt="icon of navbar"
      />
      <li className="hover-underline-animation ">{list}</li>
    </NavLink>
  );
}

export default ListItem;
