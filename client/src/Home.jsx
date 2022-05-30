import React from 'react';
import Sidebar from '../components/Sidebar';
import UserDisplay from '../components/UserDisplay';

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

  )
}

export default Home;