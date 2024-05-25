import React from 'react';

function ListItem({ text }) {
  return (
    <li className="flex items-center font-extralight text-[#1b64ac] md:text-lg xl:text-xl">
      <span className="absolute -left-[11px] text-5xl text-[#1b64ac] md:-left-[12.5px] md:text-6xl xl:-left-[15.5px] xl:text-7xl">
        •
      </span>{' '}
      {text}
    </li>
  );
}

export default ListItem;
