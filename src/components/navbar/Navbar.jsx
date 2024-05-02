import React from 'react';
import Logo from './Logo';
import List from './List';
import UserStatus from './UserStatus';

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex h-screen w-[15%] flex-col justify-between bg-[#004D40] px-3 py-6 text-[white]">
        <List />
        <UserStatus />
      </div>
      <Logo />
    </div>
  );
}

export default Navbar;
