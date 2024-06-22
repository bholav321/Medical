import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Consult from './Components/Consult.js';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';

import UserDetails from './Components/UserDetails';
import Auth from './Components/Auth.js';
function App() {
  return<>
    {/* <h3>App. Component..</h3> */}
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='sing' */}

      <Route path="user" element={<Auth><Profile /></Auth>}>
      {/* <Route path='user' element = {<Profile/>}> */}
      <Route path="contact" element={<Consult/>}/>
      <Route index element = {<UserDetails/>}/>
      </Route>
    </Routes>
  </>
}

export default App;
