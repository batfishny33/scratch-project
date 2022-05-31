import React, { useState, useContext } from 'react';
import '../styles/signup.css';
import axios from 'axios';
import { currentUserContext } from '../src/Context.js';
//for later: change "tech stack" from a text field where user inputs a string to multiple options user can click on to add
  //MAYBE (stretch) allow them to input a custom value in addition to clickable multiple options


//send a post request to /users to create a new user

// Required keys in order:
// Age: Number
// fullName: string
// username: String
// password: String
// imgURL: string (idk yet…)


//to add: check if username is unique before allowing signup to complete


function Signup() {
  // send to create
  const [ageInput, setAgeInput] = useState('');
  const [fullnameInput, setFullnameInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [imgInput, setImgInput] = useState('');
  const [bioInput, setBioInput] = useState('');
  const [techStackInput, setStackInput] = useState('');

  const handleGenderInput = (e) => {
    setGenderInput(e.target.value)
  }
  // handle username input
  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  }
  // handle password input
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  }
  const handleAgeInput = (e) => {
    setAgeInput(e.target.value);
  }
  const handleNameInput = (e) => {
    setFullnameInput(e.target.value);
  }
  const handlePhoneInput = (e) => {
    setPhoneInput(e.target.value);
  }

  const handleStackInput = (e) => {
    setStackInput(e.target.value);
  }

  const handleURLInput = (e) => {
    setImgInput(e.target.value);
  }

  const handleBioInput = (e) => {
    setBioInput(e.target.value);
  }

  // AXIOS POST REQUEST FUNCTION
  const createUser = async () => {
    const result = await axios.post('/users', {
      age: ageInput,
      gender: genderInput,
      password: passwordInput,
      username: usernameInput,
      phone: phoneInput,
      imgURL: imgInput,
      bio: bioInput,
      fullName: fullnameInput,
      techStack: techStackInput,
    })
    console.log(result);
  }
  
  // const [currentUser, setCurrentUser] = useContext(currentUserContext);
  // setCurrentUser( {
  //   age: ageInput,
  //   gender: genderInput,
  //   password: passwordInput,
  //   username: usernameInput,
  //   phone: phoneInput,
  //   imgURL: imgInput,
  //   bio: bioInput,
  //   fullName: fullnameInput,
  //   techStack: techStackInput,
  // })

  return (
  <div id="SIGNUP">
    <div className="signup-form" >
      <h1>Signup</h1>
      <input required onChange={handleAgeInput} className="signup-input" name="age" type="number" value={ageInput} placeholder="Age" />
      <input required onChange={handleNameInput} className="signup-input" name="fullName" type="text" value={fullnameInput} placeholder="Full Name" />
      <select onChange={handleGenderInput} name="gender" id="gender-select" value={genderInput}>
        <option value="Male">Male (0101001)</option>
        <option value="Female">Female (011001)</option>
        <option value="Non-Binary">Non-Binary (12345)</option>
      </select>
      <input required onChange={handleUsernameInput} value={usernameInput} className="signup-input" name="username" type="text" placeholder="Username" />
      <input required onChange={handlePasswordInput} value={passwordInput} className="signup-input" name="password" type="password" placeholder="Password" />
      <input required onChange={handlePhoneInput} value={phoneInput} className="signup-input" name="phone" type="text" placeholder="Phone Number" />
      <input required onChange={handleURLInput} value={imgInput} className="signup-input" name="imgURL" type="text" placeholder="img URL lol" />
      <input onChange={handleBioInput} value={bioInput} className="signup-input" type="text" name="bio" placeholder="Bio, Be Creative!" />
      <input onChange={handleStackInput} value={techStackInput} className="signup-input" type="text" name="techStack" placeholder="What is your tech stack?" />
      <button type="submit" className="signup-btn">Enter</button>
      <p className="error-msg">Error</p>
    </div>
  </div>
  )
}


// function Signup() {
//   // send to create
//   return (
//     <div>Signup
//       <form className="signup" action='/users' method='post'>
//         <label for='age'>Age: </label>
//         <input type='number' name='age' id='age'></input>
//         <label for='fullName'>Full Name: </label>
//         <input type='text' name='fullName' id='fullName'></input>
//         <label for='username'>Username: </label>
//         <input type='text' name='username' id='username'></input>
//         <label for='password'>Password: </label>
//         <input type='text' name='password' id='password'></input>
//         <label for='imgURL'>Image: </label>
//         <input type='text' name='imgURL' id='imgURL'></input>
//         <label for='bio'>Bio: </label>
//         <input type='text' name='bio' id='bio'></input>
//         <label for='techStack'>Tech Stack: </label>
//         <input type='text' name='techStack' id='techStack'></input>

//         <input type='submit' value='Sign Up'></input>
//       </form>
//     </div>
//   )
// }

export default Signup;