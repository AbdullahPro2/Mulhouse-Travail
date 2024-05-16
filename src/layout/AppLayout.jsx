import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';
import Footer from '../components/footer/Footer';

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-teal-50">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={`min-h-dvh ${isOpen ? 'bg-black bg-opacity-40 ' : ''} `}>
        <div className="lg:pl-[200px] xl:pl-[15.8%]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
// #1B4965
// #FBFFFF
// #FF9800

// #004D40
// #E0F2F1
// #FF8120
