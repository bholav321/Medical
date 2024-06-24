import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../Components/Header';

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
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First Name is required";
        else if (!/^[A-Za-z]+$/.test(firstName)) newErrors.firstName = "First Name must contain only letters";
        if (!lastName) newErrors.lastName = "Last Name is required";
        else if (!/^[A-Za-z]+$/.test(lastName)) newErrors.lastName = "Last Name must contain only letters";
        if (!contact) newErrors.contact = "Contact is required";
        else if (!/^\d{10}$/.test(contact)) newErrors.contact = "Contact must be a 10-digit number";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
        if (!confirmPass) newErrors.confirmPass = "Confirm Password is required";
        else if (password !== confirmPass) newErrors.confirmPass = "Password and Confirm Password do not match";
        if (!DOB) newErrors.DOB = "Date of Birth is required";
        if (!gender) newErrors.gender = "Gender is required";
        if (!address) newErrors.address = "Address is required";
        if (!branch) newErrors.branch = "Branch is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
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
                const doctor = JSON.stringify(res.data.doctor);
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("doctor", doctor)
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
    };

    return (<>
        <Header/>
        <div className=''>
            <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                <div className='col-md-5'>
                    <img style={{ borderRadius: '20px' }} width="100%" height="500px" src='https://i.pinimg.com/736x/c5/6e/e7/c56ee7944c0e67a8560d1847aee68fd2.jpg' alt='no image found' />
                </div>
                <div className='col-md-5 p-3'>
                    <h1 className='text-center'>Sign Up</h1>
                    <form method='post' className='form-group' onSubmit={submitForm}>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor='firstName'>First Name:</label>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required className='form-control' type='text' />
                                {errors.firstName && <small className='text-danger'>{errors.firstName}</small>}
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor='lastName'>Last Name:</label>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} required className='form-control' type='text' />
                                {errors.lastName && <small className='text-danger'>{errors.lastName}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="contact">Contact:</label>
                                <input onChange={(e) => setContact(e.target.value)} value={contact} required className='form-control' type="text" name="contact" />
                                {errors.contact && <small className='text-danger'>{errors.contact}</small>}
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="email">Email:</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} required className='form-control' type="email" name="email" />
                                {errors.email && <small className='text-danger'>{errors.email}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="password">Password:</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} required className='form-control' type="password" name="password" />
                                {errors.password && <small className='text-danger'>{errors.password}</small>}
                            </div>
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="confirmPass">Confirm Password:</label>
                                <input onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} required className='form-control' type="password" name="confirmPass" />
                                {errors.confirmPass && <small className='text-danger'>{errors.confirmPass}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="DOB">Date of Birth:</label>
                                <input onChange={(e) => setDOB(e.target.value)} value={DOB} required className='form-control' type="date" name="DOB" />
                                {errors.DOB && <small className='text-danger'>{errors.DOB}</small>}
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
                                {errors.branch && <small className='text-danger'>{errors.branch}</small>}
                            </div>
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
                                {errors.gender && <small className='text-danger'>{errors.gender}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <label className='mt-2 col-md-4' htmlFor="address">Address:</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={address} required className='col-md-8 form-control' type="text" name="address" />
                            {errors.address && <small className='text-danger'>{errors.address}</small>}
                        </div>


                        <div className="mt-3">
                            <button type='submit' className='btn btn-success'>Sign Up</button>
                            &nbsp;&nbsp;
                            <Link to="/doctorsignin" >
                                <span className='text-primary'>Already have an account?</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </>
    );
}
