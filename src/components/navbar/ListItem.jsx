import React from 'react';
import { NavLink } from 'react-router-dom';

function ListItem({ to, list }) {
  return (
    <NavLink to={to}>
      <li>{list}</li>
    </NavLink>
  );
}

export default ListItem;
