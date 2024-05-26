import React from 'react';

function ListItem({ text, nom }) {
  const handleClickScroll = () => {
    const element = document.getElementById(nom);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      className="relative flex cursor-pointer items-center font-light text-blue-700 md:text-lg xl:text-xl"
      onClick={handleClickScroll}
    >
      <span className="absolute -left-[27.2px] text-5xl text-blue-500 md:-left-[29px] md:text-6xl xl:-left-8 xl:text-7xl">
        •
      </span>
      <span className="ml-8">{text}</span>
    </li>
  );
}

export default ListItem;
