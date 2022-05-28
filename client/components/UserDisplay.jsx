import React, { useEffect } from 'react';
import axios from 'axios';
import User from './User';



//this is where we will render a USER for each user stored in our database

function UserDisplay() {
  const users = [];
  useEffect(() => {

    const users = [];
    const fetchData = async () => {
      const { data } = await axios.get('/users');
      for(let i = 0; i < data.length; i++){
        users.push(<User userDetails={data[i]} key={data[i].username} />)
      }
    }
    fetchData();  
    
  },[]);

  
  return (
    <div>{users}</div>
  )
}

export default UserDisplay;