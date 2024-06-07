import React, { useState, useEffect } from 'react';

function MessageTopup({ message, duration = 2000, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the message
    setVisible(true);

    // Hide the message after the specified duration
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [duration]);

  if (type === 'success') {
    return (
      <div
        className={`fixed left-0 top-0 z-50 w-full rounded-lg bg-green-300 px-4 py-2 text-center transition-all duration-500 md:w-[50%] ${
          visible
            ? 'translate-y-[80px] opacity-100'
            : '-translate-y-full opacity-0'
        } md:left-[33.3333%]`}
      >
        {message}
      </div>
    );
  } else {
    return (
      <div
        className={`fixed left-0 top-0 z-50 w-full rounded-lg bg-red-300 px-4 py-2 text-center transition-all duration-500 md:w-[50%] ${
          visible
            ? 'translate-y-[80px] opacity-100'
            : '-translate-y-full opacity-0'
        } md:left-[33.3333%]`}
      >
        {type}
      </div>
    );
  }
}

export default MessageTopup;
