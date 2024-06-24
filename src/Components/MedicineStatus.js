import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MedicineStatus() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const userId = user._id  ;
  const [medicine,setMedicine] = useState([]);
  useEffect(()=>{
    axios.post("http://localhost:2024/medicine/getMedicineStatusByUserId",{userId}).then(result=>{
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
            <th>Doctor Name</th>
            <th>Contact</th>
            <th>Specility</th>
            <th>Disease</th>
            <th>Medicine Name</th>
            <th>Time</th>
          </thead>
          <tbody>
            {medicine?.map((data,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{data.doctorId.firstName+" "+data.doctorId.lastName}</td>
              <td>{data.doctorId.contact}</td>
              <td>{data.doctorId.branch}</td>
              <td>{data.disease}</td>
              <td>{data.medicineName}</td>
              <td>{data.time}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
  </>
}

export default MedicineStatus