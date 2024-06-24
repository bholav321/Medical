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
import DoctorSignUp from './Doctor/DoctorSignUp.js';
import DoctorSignIn from './Doctor/DoctorSignIn.js';
import DoctorProfile from './Doctor/DoctorProfile.js';
import DoctorDetails from './Doctor/DoctorDetails.js';
import PatientsList from './Doctor/PatientsList.js';
import MedicineForm from './Doctor/MedicineForm.js';
import CreateAc from './Doctor/CreateAc.js';
import MedicineStatus from './Components/MedicineStatus.js';
import DocAuth from './Doctor/DocAuth.js';
import AssignMedicine from './Doctor/AssignMedicine.js';
function App() {
  return<>
    {/* <h3>App. Component..</h3> */}
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path="user" element={<Auth><Profile /></Auth>}>
      {/* <Route path='user' element = {<Profile/>}> */}
      <Route path="contact" element={<Consult/>}/>
      <Route index element = {<UserDetails/>}/>
      <Route path='medicineStatus' element={<MedicineStatus/>}/>
      </Route>

      {/* -------------------------------------------- */}
      <Route path="/doctorSignUp" element={<DoctorSignUp/>}/>
      <Route path="/doctorSignin" element={<DoctorSignIn/>}/>
      <Route path="doctorProfile" element={<DocAuth><DoctorProfile/></DocAuth>}>
        <Route index element={<DoctorDetails/>}/>
        <Route path="patientList" element={<PatientsList/>}/>
        <Route path='medicineForm' element={<MedicineForm/>}/>
        <Route path='medicineAssign' element={<AssignMedicine/>}/>
        <Route path='accountCreation' element={<CreateAc/>}/>
      </Route>
    </Routes>
  </>
}

export default App;
