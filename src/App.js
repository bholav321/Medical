import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Constults from './Components/Constults';
import Home from './Components/Home';
function App() {
  return<>
    {/* <h3>App. Component..</h3> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/consult" element={<Constults/>}/>
    </Routes>
  </>
}

export default App;
