import React from 'react';

function SettingItem({ upperText, lowerText }) {
  return (
    <div className="">
      <p className="text-xs font-light md:text-sm">{upperText}</p>
      <p className="text-sm md:text-base">{lowerText}</p>
    </div>
  );
}

export default SettingItem;
