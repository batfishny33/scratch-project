import React, { useState } from 'react';
import { render } from 'react-dom';


import Home from './Home.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';

/*

  <Router>
    <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
  
  <Link to="/signup"></Link>
  let navigate = useNavigate();
  <button onClick={()=>{navigate('/signup')}}>Sign up here</button>
 */
function App() {

  const [ currentUser, setCurrentUser ] =  useState({});

  return (
    <div>
      <h1>U &amp; I</h1>
      <Login />
      <Signup />
      <Home />
      

      </div>
  )
}

export default App;