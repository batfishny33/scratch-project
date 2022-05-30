import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';
import '../styles/userdisplay.css';

function UserDisplay() {
  // users to display
  const [users, setUsers] = useState([]);
  // Get All Users
  const getUsers = async () => {
    const result = await axios.get('http://localhost:3000/users');
    result.data.forEach(person => {
      setUsers(old => [...old, <User key={person._id} userID={person._id} fullname={person.fullName} username={person.username} age={person.age} imgURL={person.imgURL[0]} bio={person.bio} stack={person.techStack} />])
    })
  }
  // shuffle users
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="display-container">
      <div className="filters">
        <select id="age-preferences">
          <option value="18">Age 21-30</option>
          <option value="20">Age 30+</option>
        </select>
      </div>
      {shuffleArray(users)}
    </div>
  )
}

export default UserDisplay;