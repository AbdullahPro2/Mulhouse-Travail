import React from 'react';
import Logo from './Logo';
import List from './List';
import UserStatus from './UserStatus';

function Navbar() {
  return (
    <div>
      <Logo />
      <List />
      <UserStatus />
    </div>
  );
}

export default Navbar;
