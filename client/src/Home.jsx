import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UserDisplay from '../components/UserDisplay';
import '../styles/home.css';

const Home = () => {
  const [loggedInAs, setLoggedInAs] = useState('');

  return (
    <div id="HOME">
      <Sidebar className="sidebar"/>
      <UserDisplay className="user-display"/>
    </div>
  )
}

export default Home;