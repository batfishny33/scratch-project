import React from 'react';
import '../styles/navbar.css';

import React, { useContext } from 'react';
import Match from './Match';
import { currentUserContext } from '../src/Context';

// since we're using currentUser here it may not requires a contextHook
// but I'm using it anyway :D

function Sidebar() {
  const currentUser = useContext(currentUserContext);
  const matchesArr = [];
  currentUser.matches.forEach(x=>matchesArr.push(<Match username={x} key={x} />));
  return (
    <nav>
      <div className="profile">
        <img className="profile-pic" src="https://pbs.twimg.com/profile_images/1513306922295996419/wvPr44ph_400x400.jpg" alt="me:3" />
        <h1>Marc Doran</h1>
      </div>
      <div className="matches">
        <h2>Matches</h2>
      </div>
    <div>{matchesArr}</div>
    </nav>
  )
}

export default Sidebar;