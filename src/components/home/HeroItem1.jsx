import React from 'react';
import heroItemImg from '../../assets/heroSection/Rectangle.svg';
function HeroItem1() {
  return (
    <div className="flex">
      <div>
        <h1>
          Lets find your <span>DREAM JOB</span> together
        </h1>
        <p>
          Discover Opportunities,Connect with Employees, and take and take the
          next step towards a fulfilling work life
        </p>
      </div>
      <img src={heroItemImg} className="w-52" />
    </div>
  );
}

export default HeroItem1;
