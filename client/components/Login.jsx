import React from 'react';


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
    </div>

  )
}

export default Login;