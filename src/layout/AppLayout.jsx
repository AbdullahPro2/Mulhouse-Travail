import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <>
      <div className="min-h-screen bg-[#feffff]">
        <Navbar />
        <Outlet />
      </div>
      <footer className="">Footers</footer>
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

{
  /* grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] sticky left-0 row-span-2 */
}
{
  /* col-start-2 row-start-1 flex items-center justify-center border-4
      border-red-500  */
}
{
  /* col-start-2 row-start-2 border-4 border-red-600 */
}
