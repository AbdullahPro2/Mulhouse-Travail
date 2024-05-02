import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default AppLayout;
// #1B4965
// #FBFFFF
// #FF9800

// #004D40
// #E0F2F1
// #FF8120
