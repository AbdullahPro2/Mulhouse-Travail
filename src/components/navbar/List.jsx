import React from 'react';
import ListItem from './ListItem';
import homeIcon from '../../assets/navbar/dashboard.png';
import aboutUsIcon from '../../assets/navbar/aboutUs.png';
import contactUsIcon from '../../assets/navbar/contactUs.png';
import settingsIcon from '../../assets/navbar/recruiting.png';
import appliedJobsIcon from '../../assets/navbar/appliedApplication.png';
import jobsIcon from '../../assets/navbar/radar.png';
import postJobIcon from '../../assets/navbar/recruiting.png';

function List() {
  return (
    <ul className="flex flex-col gap-10">
      <ListItem to="/" list="DashBoard" icon={homeIcon} />
      <ListItem to="/jobs" list="Discover Jobs" icon={jobsIcon} />
      <ListItem to="/postjob" list="Employer Portal" icon={postJobIcon} />
      <ListItem
        to="/your-applications"
        list="Applied Jobs"
        icon={appliedJobsIcon}
      />
      <ListItem to="/settings" list="Settings" icon={settingsIcon} />
      <ListItem to="/contact" list="Contact us" icon={contactUsIcon} />
      <ListItem to="/about" list="About us" icon={aboutUsIcon} />
    </ul>
  );
}

export default List;
