import React from 'react'

function DoctorDetails() {
    let doctor = localStorage.getItem("doctor");
    doctor = JSON.parse(doctor);
    return <>
        <h2 className='text-center p-3'>Profile</h2>
        <div className='p-3'>
            <h1 className='text-uppercase'>{doctor.firstName + " " + doctor.lastName}</h1>
            <h3>Specialty: {doctor.branch} </h3>
        </div>
    </>
}

export default DoctorDetails