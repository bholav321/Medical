import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function DoctorProfile() {
    let doctor = localStorage.getItem("doctor");
    doctor = JSON.parse(doctor);
    const navigate = useNavigate();
    const logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('doctor');
                Swal.fire(
                    'Logged Out!',
                    'You have been successfully logged out.',
                    'success'
                ).then(() => {
                    // Redirect to login or home page if needed
                    navigate("/")
                    // window.location.href = 'login.html'; // Change this to your desired page
                });
            }
        });
    }
    return <>
        <section className='row container m-auto mt-5'>
            <div className='col-md-3 border  d-flex  flex-column align-content-center justify-content-center'>
                <center>
                    <div className='contanier border' style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
                        <img src='https://i.pinimg.com/736x/c5/6e/e7/c56ee7944c0e67a8560d1847aee68fd2.jpg' alt='abc' width="100%" height="100%" />
                    </div>
                </center>
                <h3 className='text-center text-primary'>{doctor.firstName + " " + doctor.lastName}</h3>
                {/* <center> */}
                <div className='ps-5 p-4'>
                    <Link to="" className='text-dark' style={{ textDecoration: 'none' }}>
                        <h4>Profile</h4>
                    </Link>
                    <Link to="patientList" className='text-dark' style={{ textDecoration: 'none' }}>
                        <h4>Patients</h4>
                    </Link>
                    <Link to="medicineForm" className='text-dark' style={{ textDecoration: 'none' }}>
                        <h4>Medicine Form</h4>
                    </Link>
                    <Link to="accountCreation" className='text-dark' style={{ textDecoration: 'none' }}>
                    <h4>Create A/C</h4>      
                    </Link>
                    <Link to="medicineAssign" className='text-dark' style={{ textDecoration: 'none' }}>
                    <h4>Assign Medicine</h4>      
                    </Link>
                    <h4>F</h4>
                    <center>
                        <button className='btn btn-light border fs-5' onClick={logout}><FaSignOutAlt />logout</button>
                    </center>
                </div>
                {/* </center> */}
            </div>
            <div className='col-md-9 border'>
                <Outlet />
            </div>
        </section>
    </>
}

export default DoctorProfile