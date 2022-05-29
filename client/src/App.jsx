
import React, { useState } from 'react';
import Home from './Home.jsx';
import Login from '../components/Login.jsx';


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

  const [ currentUser, setCurrentUser ] =  useState({fullName: 'Ninja', username: 'nagoya123', password: '123'});
  const [ loggedIn, setLoggedin ] = useState(false);

  return (
    <div>
      <h1>U &amp; I</h1>
      {loggedIn ? <Home /> : <Login />}  
      </div>
      
  )
}

export default App;