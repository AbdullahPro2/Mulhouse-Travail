import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Logo from '../components/navbar/Logo';

function AppLayout() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-[#f4fffE]">
        <div className="fixed row-span-2">
          <Navbar />
        </div>
        <div className="col-start-2 row-start-1 flex  items-center justify-center border-4  border-red-500">
          <Logo />
        </div>
        <div className="col-start-2 row-start-2 ml-[200px] border-4 border-red-600">
          <Outlet />
        </div>
      </div>
      <footer className="ml-[200px]">
        Footers
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        Footerhhhhhhhhhhhhhhhhhhhhhhhhh
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        Footer
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        Footer
        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      </footer>
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
