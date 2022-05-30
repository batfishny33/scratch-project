import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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