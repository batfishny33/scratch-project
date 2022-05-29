import React from 'react';
import Signup from '../components/Signup.jsx';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom'; 
//POST to users/signin
//with body: username, password

function Login() {

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