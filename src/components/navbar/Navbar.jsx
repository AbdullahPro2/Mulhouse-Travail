import List from './List';
import UserStatus from './UserStatus';
import Logo from './Logo';
import { Fade as Hamburger } from 'hamburger-react';

function Navbar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`relative z-30   flex items-center justify-end p-4 lg:ml-60 lg:justify-center ${isOpen ? ' bg-black bg-opacity-50' : ''}`}
    >
      <div
        className={` absolute transition-all duration-300 ${isOpen ? 'left-36 top-2 delay-100' : 'left-2'} z-50  h-10 lg:hidden`}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={`${isOpen ? '#fff' : '#1b64ac'}  `}
          duration={0.8}
          direction="right"
        />
      </div>

      <div
        className={` absolute left-0 top-0 z-40 flex h-screen  -translate-x-full flex-col justify-between  overflow-auto bg-[#1b64ac] !bg-opacity-100 pt-20 text-sm text-[white] transition-all duration-150 ease-in-out no-scrollbar lg:fixed lg:w-[200px] lg:translate-x-0 xl:w-[15.8%] xl:text-base ${
          isOpen ? 'translate-x-0' : 'delay-[1200ms]'
        }`}
      >
        <List isOpen={isOpen} setIsOpen={setIsOpen} />
        <UserStatus setIsOpen={setIsOpen} />
      </div>
      <Logo />
    </div>
  );
}

export default Navbar;
