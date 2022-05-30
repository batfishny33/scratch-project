import React from 'react';
import '../styles/navbar.css';

import Match from './Match';

function Sidebar() {
  return (
    <nav>
      <div className="profile">
        <img className="profile-pic" src="https://pbs.twimg.com/profile_images/1513306922295996419/wvPr44ph_400x400.jpg" alt="me:3" />
        <h1>Marc Doran</h1>
      </div>
      <div className="matches">
        <h2>Matches</h2>
      </div>
    </nav>
  )
}

export default Sidebar;