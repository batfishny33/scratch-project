<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

=======
>>>>>>> dev

import React, { useState, createContext } from 'react';
import Home from './Home.jsx';
import Login from '../components/Login.jsx';
import { currentUserContext } from './Context.js';

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

  const [ currentUser, setCurrentUser ] =  useState({fullName: 'Ninja', username: 'nagoya123', password: '123', likedMe: ['sexy boy', 'fluffy gatito'], likedUsers: ['sexier boy', 'sexy boy', 'fluffy gatito'], matches: ['sexy boy', 'fluffy gatito'] });
  const [ loggedIn, setLoggedin ] = useState(true);
 

  return (
<<<<<<< HEAD
  <Router>
    <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
=======
    <div>
      <h1>U &amp; I</h1>
      <currentUserContext.Provider value={currentUser} >
         {loggedIn ? <Home /> : <Login />}  
      </currentUserContext.Provider>
     
      </div>
      
>>>>>>> dev
  )
}

export default App;