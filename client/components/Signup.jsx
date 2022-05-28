import React from 'react';

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
  return (
    <div>Signup
      <form className="signup" action='/users' method='post'>
        <label for='age'>Age: </label>
        <input type='number' name='age' id='age'></input>
        <label for='fullName'>Full Name: </label>
        <input type='text' name='fullName' id='fullName'></input>
        <label for='username'>Username: </label>
        <input type='text' name='username' id='username'></input>
        <label for='password'>Password: </label>
        <input type='text' name='password' id='password'></input>
        <label for='imgURL'>Image: </label>
        <input type='text' name='imgURL' id='imgURL'></input>
        <label for='bio'>Bio: </label>
        <input type='text' name='bio' id='bio'></input>
        <label for='techStack'>Tech Stack: </label>
        <input type='text' name='techStack' id='techStack'></input>

        <input type='submit' value='Sign Up'></input>
      </form>
    </div>
  )
}

export default Signup;