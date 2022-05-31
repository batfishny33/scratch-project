<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> dev
import Sidebar from '../components/Sidebar';
import UserDisplay from '../components/UserDisplay';
import '../styles/home.css';

const Home = () => {
  const [loggedInAs, setLoggedInAs] = useState('');

<<<<<<< HEAD
  return (
    <div id="HOME">
      <Sidebar className="sidebar"/>
      <UserDisplay className="user-display"/>
    </div>
=======
function Home() {

  // DummyData, delete and change to users={[]} when the fetch in UserDisplay works 
  const dummyData = [{fullName:'Kitty', username:'meow', imgURL:'', bio:'', techStack:[], likedUsers:[]},
  {fullName:'Doggo', username:'woofwoof', imgURL:'', bio:'', techStack:[], likedUsers:[]}];

  return (
    <div>
      HOME
      <Sidebar />
      <UserDisplay users={dummyData} />
    </div>

>>>>>>> dev
  )
}

export default Home;