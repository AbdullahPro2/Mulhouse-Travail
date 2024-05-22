import React from 'react';
import { NavLink } from 'react-router-dom';

function ListItem({ to, list, icon, isOpen, delay, setIsOpen, delayClose }) {
  return (
    <NavLink
      to={to}
      className={`flex items-center gap-3  px-4 py-2 transition-all duration-150 ease-in-out hover:bg-[#003262] lg:translate-x-0 ${isOpen ? `translate-x-0` : ' -translate-x-full'} `}
      style={{
        transitionDelay: `${isOpen ? `${delay}ms` : `${delayClose}ms`}`,
      }}
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
