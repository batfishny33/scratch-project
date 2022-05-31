import React from 'react';
import Sidebar from '../components/Sidebar';
import UserDisplay from '../components/UserDisplay';



function Home() {

  // DummyData, delete and change to users={[]} when the fetch in UserDisplay works 
  const dummyData = [{fullName:'Kitty', username:'meow', imgURL:'', bio:'', techStack:[], likedUsers:[]},
  {fullName:'Doggo', username:'woofwoof', imgURL:'', bio:'', techStack:[], likedUsers:[]}];

  return (
    <div id="home">
      HOME
      <Sidebar className="sidebar"/>
      <UserDisplay users={dummyData} className="userDisplay"/>
    </div>

  )
}

export default Home;