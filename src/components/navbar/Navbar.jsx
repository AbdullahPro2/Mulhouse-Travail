import React, { useState } from 'react';
import List from './List';
import UserStatus from './UserStatus';
import Logo from './Logo';
import { Fade as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-end p-4">
      <div
        className={` absolute transition-all duration-300 ${isOpen ? 'left-36 top-2 delay-100' : 'left-2'} z-10 h-12`}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={`${isOpen ? '#feffff' : '#004D40'}  `}
          duration={0.8}
          direction="right"
        />
      </div>

      <div
        className={`absolute left-0 top-0 flex h-screen -translate-x-full flex-col justify-between border-2 bg-[#004D40] pt-20 text-[white] transition-all duration-150 ease-in-out  ${
          isOpen ? 'translate-x-0' : 'delay-1000'
        }`}
      >
        <List isOpen={isOpen} setIsOpen={setIsOpen} />
        <UserStatus />
      </div>
      <Logo />
    </div>
  );
}

export default Navbar;
