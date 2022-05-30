import React from 'react';
import axios from 'axios';
import '../styles/signup.css';


function Signup() {
  // send to create
  return (
  <div id="SIGNUP">
    <div className="signup-form">
      <h1>Signup</h1>
      <input className="username-input" type="number" placeholder="Age" />
      <input className="password-input" type="text" placeholder="Full Name" />
      <select id="gender-select">
        <option value="Male">Male (0101001)</option>
        <option value="Female">Female (011001)</option>
        <option value="Non-Binary">Non-Binary (12345)</option>
      </select>
      <input className="password-input" type="text" placeholder="Username" />
      <input className="username-input" type="password" placeholder="Password" />
      <input className="password-input" type="text" placeholder="Bio, Be Creative!" />
      <input className="username-input" type="text" placeholder="img URL lol" />
      <button className="signup-btn">Enter</button>
      <p className="error-msg">Error</p>
    </div>
  </div>
  )
}

export default Signup;