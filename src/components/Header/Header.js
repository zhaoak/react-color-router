import React from 'react';
import './Header.css';
import { NavLink, useParams } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
      <NavLink
        to="/237/92/56"
        activeStyle={{
          fontWeight: 'bold',
          color: 'rgb(237, 92, 56)',
        }}
      >
        hot dog
      </NavLink>
      <NavLink
        to="/247/175/234"
        activeStyle={{
          fontWeight: 'bold',
          color: 'rgb(247, 175, 234)',
        }}
      >
        cotton candy pink
      </NavLink>
      <NavLink
        to="/64/102/84"
        activeStyle={{
          fontWeight: 'bold',
          color: 'rgb(64, 102, 84)',
        }}
      >
        seafloor
      </NavLink>
    </header>
  );
}
