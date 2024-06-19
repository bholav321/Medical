import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Constults from './Components/Constults';
function App() {
  return<>
    {/* <h3>App. Component..</h3> */}
    <Routes>
      <Route path="/" element={<Constults/>}/>
    </Routes>
  </>
}

export default App;
