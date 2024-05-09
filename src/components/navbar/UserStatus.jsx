import React from 'react';
import loginLogo from '../../assets/navbar/login.png';
function UserStatus() {
  return (
    <div className="mt-5 flex items-center gap-4 p-4 hover:bg-[#163631c2]">
      <img src={loginLogo} alt="LOGIN LOGO" className="w-8 invert" />
      <p className="cursor-pointer tracking-widest">Login</p>
    </div>
  );
}

export default UserStatus;
