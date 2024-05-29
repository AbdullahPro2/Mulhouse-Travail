import React from 'react';
import { useSelector } from 'react-redux';

function Settings() {
  const user = useSelector((store) => store.user);
  console.log(user);
  return <div>Settings</div>;
}

export default Settings;
