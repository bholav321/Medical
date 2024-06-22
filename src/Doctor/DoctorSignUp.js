import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DoctorSignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [DOB, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        if (firstName && lastName && contact && email && password && confirmPass && DOB && gender && address) {
            if (password !== confirmPass) {
                alert("Password and Confirm Password do not match");
            } else {
                axios.post("http://localhost:2024/doctor/signup", {
                    firstName,
                    lastName,
                    contact,
                    email,
                    password,
                    DOB,
                    gender,
                    address,
                    branch
                }).then(res => {
                    console.log(res.data);
                    const user = JSON.stringify(res.data.user);
                    localStorage.setItem("user", user)
                    Swal.fire({
                        icon: 'success',
                        title: 'Sign Up successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setFirstName("");
                    setLastName("");
                    setContact("");
                    setEmail("");
                    setPassword("");
                    setConfirmPass("");
                    setDOB("");
                    setGender("");
                    setAddress("");
                    setBranch("");
                    navigate("/")
                }).catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    });
                });
            }
        }
    };

    return (
        <div className='mt-5'>
            <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                <div className='col-md-5'>
                    <img style={{ borderRadius: '20px' }} width="100%" height="500px" src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' alt='no image found' />
                </div>
                <div className='col-md-5 p-3'>
                    <h1 className='text-center'>Sign Up</h1>
                    <form method='post' className='form-group' onSubmit={submitForm}>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor='firstName'>First Name:</label>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required className='form-control' type='text' placeholder='' />
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor='lastName'>Last Name:</label>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} required className='form-control' type='text' placeholder='' />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="contact">Contact:</label>
                                <input onChange={(e) => setContact(e.target.value)} value={contact} required className='form-control' type="text" name="contact" />
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="email">Email:</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} required className='form-control' type="email" name="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="password">Password:</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} required className='form-control' type="password" name="password" />
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="confirmPass">Confirm Password:</label>
                                <input onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} required className='form-control' type="password" name="confirmPass" />
                            </div>
                        </div>
                        <div className="row">
                            <label className='mt-2 col-md-4' htmlFor="address">Address:</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={address} required className='col-md-8 form-control' type="text" name="address" />
                        </div>
                        <div className="row mt-2">
                            <label className='col-md-4' htmlFor="gender">Gender:</label>
                            <div className='col-md-8'>
                                <div className="form-check form-check-inline">
                                    <input onChange={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="gender" value="Male" id="male" required />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="gender" value="Female" id="female" required />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="gender" value="Other" id="other" required />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="DOB">Date of Birth:</label>
                                <input onChange={(e) => setDOB(e.target.value)} value={DOB} required className='form-control' type="date" name="DOB" />
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="branch">Branch:</label>
                                <select onChange={(e) => setBranch(e.target.value)} value={branch} className='form-control' required>
                                    <option value="">Select Branch</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Endocrinology">Endocrinology</option>
                                    <option value="Gastroenterology">Gastroenterology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-3">
                            <button type='submit' className='btn btn-success'>Sign Up</button>
                            &nbsp;&nbsp;
                            <Link to="/signin" >
                                <span className='text-primary'>Already have an account?</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
