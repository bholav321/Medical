import axios from 'axios';
import React, { useEffect } from 'react'

function PatientsList() {
    const [patients, setPatients] = React.useState([])
    useEffect(()=>{
        axios.get("http://localhost:2024/user/userList").then(res=>{
            // console.log(res.data.result);
            setPatients(res.data.result)
        }).catch(err=>{
            console.log(err)
        });
    },[]);
  return <>
  <h2 className='text-center p-3'>Patient List</h2>
    <table className='table'>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Patient Name</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {patients?.map((data,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{data.username}</td>
                <td>{data.contact}</td>
                <td>{data.gender}</td>
                <td>{data.age}</td>
                <td>{data.address}</td>
            </tr>)}
        </tbody>
    </table>
  </>
}

export default PatientsList