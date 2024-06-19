import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Constults from './Components/Constults';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
function App() {
  return<>
    {/* <h3>App. Component..</h3> */}
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path="/consult" element={<Constults/>}/>
    </Routes>
  </>
}

export default App;
