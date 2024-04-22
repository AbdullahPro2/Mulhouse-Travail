import React, { useState } from 'react';
import Login from '../features/authentication/Login';
import Signup from '../features/authentication/Signup';

function Authentication() {
  const [firstTime, setFirstTime] = useState(true);
  return (
    <div>
      <h1>Authentication</h1>
      <button
        className="mx-20 border-2 p-2"
        onClick={() => setFirstTime((t) => !t)}
      >
        Login
      </button>
      <button
        className="mx-20 border-2 p-2"
        onClick={() => setFirstTime((t) => !t)}
      >
        Signup
      </button>

      {firstTime && <Signup />}
      {!firstTime && <Login />}
    </div>
  );
}

export default Authentication;
