
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import { currentUserContext } from './Context.js';

/*

    <currentUserContext.Provider value={currentUser} >
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
    </currentUserContext.Provider>



      <currentUserContext.Provider value={currentUser} >
        <Route path="/" exact element={<Login />} />
      </currentUserContext.Provider>
  
  <Link to="/signup"></Link>
  let navigate = useNavigate();
  <button onClick={()=>{navigate('/signup')}}>Sign up here</button>
 */
function App() {

  const [ currentUser, setCurrentUser ] =  useState("");
  // const [ loggedIn, setLoggedin ] = useState(false);
 

  return (
  <Router>
    <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
      
  )
}

export default App;