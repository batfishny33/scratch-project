import React, { useEffect } from 'react';
import axios from 'axios';
import User from './User.jsx';



//this is where we will render a USER for each user stored in our database

function UserDisplay(props) {

  const {users} = props;

  // currently cannot fetch 
  
  // useEffect(() => {
  
  //   const fetchData = async () => {
  //     const { data } = await axios.get('/users');
  //     for(let i = 0; i < data.length; i++){
  //       users.push(<User userDetails={data[i]} key={data[i].username} />)
  //     }
  //   }
  //   fetchData();  
    
  // },[]) 


  //dummyData before really fetching from the backend, change to render{data} when fetch works
  const dat=[];
  for(let i = 0; i < users.length; i++){
    dat.push(<User userDetails={users[i]} key={users[i].username} />)
  };
  

  return (
    <div>  
       {dat}
    </div>
  )
}

export default UserDisplay;