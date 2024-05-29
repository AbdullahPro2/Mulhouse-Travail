import React from 'react';

function JobItem({
  jobTitle,
  compnayName,
  location,
  salary,
  time,
  description,
}) {
  return (
    <div className="bg-[#eee]">
      <h1>{jobTitle}</h1>
      <div>
        <p>{compnayName}</p>
        <p>{location}</p>
      </div>
      <div>
        <p>{salary}</p>
        <p>{time}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default JobItem;
