import React, { Component } from 'react';


import Sidebar from '../components/Sidebar';
import UserDisplay from '../components/UserDisplay';

function Home() {
  return (
    <div>
      <Sidebar />
      <UserDisplay />
    </div>

  )
}

export default Home;