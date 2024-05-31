import React from 'react';
import { NavLink } from 'react-router-dom';
import loginLogo from '../../assets/navbar/login.png';
import logoutLogo from '../../assets/navbar/logout.png';
import { useDispatch, useSelector } from 'react-redux';
import supabase from '../../services/supabase';
import { logOutUser } from '../../features/authentication/AuthSlice';
function UserStatus({ setIsOpen }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  async function handleLogout() {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log('There was problem loggout out user', error);
    } else {
      dispatch(logOutUser());
    }
  }

  if (user.firstName == '')
    return (
      <div className="mt-5 flex items-center gap-4 p-4 hover:bg-[#003262]">
        <img src={loginLogo} alt="LOGIN LOGO" className="w-8 invert" />
        <NavLink to="login" onClick={() => setIsOpen(false)}>
          <p className="cursor-pointer tracking-widest">Connexion </p>
        </NavLink>
      </div>
    );
  if (user.firstName)
    return (
      <div className="mt-5 flex items-center gap-4 p-4 hover:bg-[#003262]">
        <img src={logoutLogo} alt="LOGIN LOGO" className="w-8 invert" />
        <NavLink to="login" onClick={() => setIsOpen(false)}>
          <p className="cursor-pointer tracking-widest" onClick={handleLogout}>
            Se déconnecter{' '}
          </p>
        </NavLink>
      </div>
    );
}

export default UserStatus;
