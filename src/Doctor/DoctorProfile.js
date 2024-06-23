import React from 'react'
function DoctorProfile() {
    let doctor = localStorage.getItem("doctor");
    doctor = JSON.parse(doctor);
  return <>
    <section className='row container m-auto mt-5'>
        <div className='col-md-3 border  d-flex  flex-column align-content-center justify-content-center'>
            <center>
            <div className='contanier border' style={{borderRadius:'50%',width:'200px',height:'200px'}}>
                <img src='https://i.pinimg.com/736x/c5/6e/e7/c56ee7944c0e67a8560d1847aee68fd2.jpg' alt='abc' width="100%" height="100%"/>
            </div>
            </center>
            <h3 className='text-center text-primary'>{doctor.firstName+" "+doctor.lastName}</h3>
            <center>
            <div className='p-3'>
                <h3>A</h3>
                <h3>B</h3>
                <h3>C</h3>
                <h3>D</h3>
                <h3>E</h3>
                <h3>F</h3>
            </div>
            </center>
        </div>
        <div className='col-md-9 border'>
            <h2 className='text-center'>Profile</h2>
            <div className='p-3'>
                <h1 className='text-uppercase'>{doctor.firstName+" "+doctor.lastName}</h1>
                <h3>Specialty: {doctor.branch} </h3>
            </div>
        </div>
    </section>
  </>
}

export default DoctorProfile