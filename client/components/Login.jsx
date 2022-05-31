import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import Signup from '../components/Signup.jsx';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom'; 

//POST to users/signin
//with body: username, password


//I want to use useNavigate as it's cleaner(just a button) but I couldn't make it work 
function Login() {
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


  return (
    <div>Login
      <form className="login" action='/users/signin' method='post'>
        <label for='username'>Username: </label>
        <input type='text' name='username' id='username'></input>
        <label for='password'>Password: </label>
        <input type='text' name='password' id='password'></input>
        <input type='submit' value='Log In'></input>
      </form>
      <Router>
      <Link to='/signup'>Sign up here</Link>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
    </div>

  )
}

export default Login;