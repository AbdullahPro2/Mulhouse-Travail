import React from 'react';
import ListItem from './ListItem';

function List() {
  return (
    <ul>
      <ListItem to="/" list="DashBoard" />
      <ListItem to="/jobs" list="Discover Jobs" />
      <ListItem to="/postjob" list="Employer Portal" />
      <ListItem to="/your-applications" list="Applied Jobs" />
      <ListItem to="/settings" list="Settings" />
      <ListItem to="/contact" list="Contact us" />
      <ListItem to="/about" list="About us" />
    </ul>
  );
}

export default List;
