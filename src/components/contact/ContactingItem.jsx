import React from 'react';

function ContactingItem({ img, text, children }) {
  return (
    <div className="mt-5 flex items-center gap-6 lg:text-lg">
      <img src={img} alt="contact us icon" className="h-8 w-8" />
      <p>
        {text}
        <br />
        {children}
      </p>
    </div>
  );
}

export default ContactingItem;
