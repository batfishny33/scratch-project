import React, { useEffect } from 'react';
import axios from 'axios';
import User from './User';



//this is where we will render a USER for each user stored in our database

function UserDisplay() {
  const users = [];
  useEffect(() => {

    const fetchData = async () => {
      const user = await axios.get('/users');
    }

    

  },[]);

  
  return (
    <div>{users}</div>
  )
}

export default UserDisplay;