import React from 'react';
import List from './List';
import UserStatus from './UserStatus';

function Navbar() {
  return (
    <div className="flex justify-between border-4 border-red-500">
      <div className=" flex h-screen  flex-col justify-between bg-[#004D40] px-3 py-6 text-[white]">
        <List />
        <UserStatus />
      </div>
    </div>
  );
}

export default Navbar;
