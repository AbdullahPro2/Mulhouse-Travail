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
