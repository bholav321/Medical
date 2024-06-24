import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MedicineForm = () => {
  const [patients, setPatients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [form, setForm] = useState({
    patientName: '',
    age: '',
    gender: 'Male',
    medicineName: '',
    disease: '',
    time: '',
    nextAppointment: '',
    userId:'',
    doctorId:''
  });

  useEffect(() => {
    axios.get("http://localhost:2024/user/userList").then(res => {
      setPatients(res.data.result);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    // If the input field is patientName, filter suggestions
    if (name === 'patientName') {
      const filteredSuggestions = patients.filter(patient =>
        patient.username.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (username) => {
    setForm({
      ...form,
      patientName: username,
    });
    setSuggestions([]);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form data:', form);
    // Add form submission logic here
    const user = await axios.post("http://localhost:2024/user/findByName",{username:form.patientName})
    if(user.data.user){
        const userId = user.data.user._id;
        let doctor  = localStorage.getItem("doctor");
        doctor =  JSON.parse(doctor);
        const doctorId = doctor._id;
        form.doctorId = doctorId;
        form.userId = userId;
        await axios.post("http://localhost:2024/medicine/addMedicine",{form})
        Swal.fire({
          icon: 'success',
          title: 'Medicine add successfully...',
          showConfirmButton: false,
          timer: 1500
      });
      handleReset();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Not Found!'
    });
    }
  };

  const handleReset = () => {
    setForm({
      patientName: '',
      age: '',
      gender: 'Male',
      medicineName: '',
      disease: '',
      time: '',
      nextAppointment: '',
    });
    setSuggestions([]);
  };

  return (
    <div className="container mt-3 row">
      <h2 className='text-center p-3'>Medicine Form</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className="mb-3 col-md-6 position-relative">
          <label htmlFor="patientName" className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            id="patientName"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            required
          />
          {suggestions.length > 0 && (
            <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
              {suggestions.map((patient, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSuggestionClick(patient.username)}
                >
                  {patient.username}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div className="form-check d-inline ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check d-inline ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check d-inline ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="Other"
              checked={form.gender === 'Other'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="other">
              Other
            </label>
          </div>
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="disease" className="form-label">Disease</label>
          <input
            type="text"
            className="form-control"
            id="disease"
            name="disease"
            value={form.disease}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="medicineName" className="form-label">Medicine Name</label>
          <input
            type="text"
            className="form-control"
            id="medicineName"
            name="medicineName"
            value={form.medicineName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="time" className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="nextAppointment" className="form-label">Next Appointment Date</label>
          <input
            type="date"
            className="form-control"
            id="nextAppointment"
            name="nextAppointment"
            value={form.nextAppointment}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="button" className='btn btn-danger col-md-2 m-2' onClick={handleReset}>Reset</button>
          <button type="submit" className="col-md-3 m-2 btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MedicineForm;
