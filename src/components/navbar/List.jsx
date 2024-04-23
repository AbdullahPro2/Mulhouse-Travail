import React from 'react';
import ListItem from './ListItem';

function List() {
  return (
    <ul>
      <ListItem to="/Mulhouse-Travail/" list="DashBoard" />
      <ListItem to="/Mulhouse-Travail/jobs" list="Discover Jobs" />
      <ListItem to="/Mulhouse-Travail/postjob" list="Employer Portal" />
      <ListItem to="/Mulhouse-Travail/your-applications" list="Applied Jobs" />
      <ListItem to="/Mulhouse-Travail/settings" list="Settings" />
      <ListItem to="/Mulhouse-Travail/contact" list="Contact us" />
      <ListItem to="/Mulhouse-Travail/about" list="About us" />
    </ul>
  );
}

export default List;
