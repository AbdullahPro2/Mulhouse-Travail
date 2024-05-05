import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        className={`min-h-screen ${isOpen ? 'bg-black bg-opacity-40 ' : 'bg-[#feffff]'} `}
      >
        <div className="lg:pl-[200px]">
          <Outlet />
        </div>
      </div>
      <footer className="lg:pl-[200px]">Footer</footer>
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
