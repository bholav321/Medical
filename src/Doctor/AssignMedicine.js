import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AssignMedicine() {
  let doctor = localStorage.getItem("doctor");
  doctor = JSON.parse(doctor);
  const doctorId = doctor._id;
  const [medicine,setMedicine] = useState([]);
  useEffect(()=>{
    axios.post("http://localhost:2024/medicine/getMedicineStatusByDoctorId",{doctorId}).then(result=>{
      setMedicine(result.data.results)
      console.log(medicine)
    }).catch(err=>{
        console.log(err);
    })
  },[])
  return <>
      <h3 className='text-center p-3'>Medicine Status</h3>
      <div className='border container'>
        <table className='table'>
          <thead>
            <th>Sr. No.</th>
            <th>Patient Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Disease</th>
            <th>Medicine Name</th>
            <th>Time</th>
          </thead>
          <tbody>
            {medicine?.map((data,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{data.patientName}</td>
              <td>{data.userId.contact}</td>
              <td>{data.userId.gender}</td>
              <td>{data.disease}</td>
              <td>{data.medicineName}</td>
              <td>{data.time}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
  </>
}

export default AssignMedicine;