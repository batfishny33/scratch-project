import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';


function Login() {
  // FILL DATABASE W RANDOM USERS
  // const getRandomDataAndPostToDB = async () => {
  //   // fetch from random user api
  //   const randomUser = await axios.get('https://randomuser.me/api/');
  //   // post into db
  //   const { name, gender, cell, dob, login, picture } = randomUser.data.results[0];

  //   await axios.post('/users', {
  //     age: dob.age,
  //     fullName: `${name.first} ${name.last}`,
  //     gender: gender,
  //     username: login.username,
  //     password: login.password,
  //     phone: cell,
  //     imgURL: picture.large,
  //     bio: "Music & VIBES",
  //     techStack: ['LAMP'],
  //   });
  // } 
  // getRandomDataAndPostToDB();
  // username input var
  const [usernameInput, setUsernameInput] = useState('');
  // password input var
  const [passwordInput, setPasswordInput] = useState('');
  // handle username input
  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  }
  // handle password input
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  }
  // button click, post to Users
  const findUser = () => {
    // testing input is working
    console.log(usernameInput, passwordInput);
    // send axios post
    axios.post('http://localhost:3000/users/signin', {
      username: usernameInput,
      password: passwordInput,
    }).then((res) => {
      console.log(res);
      if (res.data === 'User Not Found') {
        // displays error msg if invalid
        document.querySelector('.error-msg').style.display = 'block';
      } else {
        window.location.assign('/home');
      }
    })
    // clear inputs after button click
    setUsernameInput('');
    setPasswordInput('');
  }
  return (
    <div id="LOGIN">
      <h1 className="login-title">Love Overflow!</h1>
      <div className="login-form">
        <h1>Login</h1>
        <input required className="username-input" onChange={handleUsernameInput} value={usernameInput} type="text" placeholder="Username" />
        <input required className="password-input" onChange={handlePasswordInput} value={passwordInput} type="password" placeholder="Password" />
        <button className="login-btn" onClick={findUser}>Enter</button>
        <p className="error-msg">Invalid Username/Password. Try Again.</p>
      </div>
      <Link className="create-acc-link" to="/signup">Create An Account</Link>
    </div>
  )
}

export default Login