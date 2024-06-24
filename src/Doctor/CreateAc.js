import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function CreateAc() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        const contactRegex = /^[0-9]+$/;
        const nameRegex = /^[a-zA-Z\s]+$/;
        const ageRegex = /^[0-9]+$/;

        if (!name.trim()) {
            errors.name = "Name is required";
        } else if (!nameRegex.test(name)) {
            errors.name = "Name can only contain letters and spaces";
        }

        if (!contact.trim()) {
            errors.contact = "Contact is required";
        } else if (!contactRegex.test(contact)) {
            errors.contact = "Contact must be a number";
        } else if (contact.length !== 10) {
            errors.contact = "Contact must be 10 digits";
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        if (!confirmPass.trim()) {
            errors.confirmPass = "Confirm Password is required";
        } else if (password !== confirmPass) {
            errors.confirmPass = "Password and Confirm Password do not match";
        }

        if (!gender.trim()) {
            errors.gender = "Gender is required";
        }

        if (!age.trim()) {
            errors.age = "Age is required";
        } else if (!ageRegex.test(age) || parseInt(age) < 0) {
            errors.age = "Age must be a positive number";
        }

        if (!address.trim()) {
            errors.address = "Address is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post("http://localhost:2024/user/signup", { username: name, contact, password, gender, age, address })
                .then(res => {
                    console.log(res.data);
                    const user = JSON.stringify(res.data.user);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Account Created Successfully...',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setContact("");
                    setPassword("");
                    setName("");
                    setConfirmPass("");
                    setGender("");
                    setAge("");
                    setAddress("");
                })
                .catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    });
                });
        }
    };

    return (
        <>
            <div className='m-3'>
                <section className='m-auto p-2 row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5 p-3'>
                        <h2 className='text-center'>Create Account</h2>
                        <form method='post' className='form-group row' onSubmit={submitForm}>
                            <div>
                                <label className='mt-2' htmlFor='name'>Name:</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                    className='form-control'
                                    type='text'
                                    placeholder=''
                                />
                            </div>
                            {formErrors.name && <small className='text-danger'>{formErrors.name}</small>}
                            <div>
                                <label className='mt-2' htmlFor="contact">Contact:</label>
                                <input
                                    onChange={(e) => setContact(e.target.value)}
                                    value={contact}
                                    required
                                    className='form-control'
                                    type="text"
                                    name="contact"
                                />
                            </div>
                            {formErrors.contact && <small className='text-danger'>{formErrors.contact}</small>}
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="password">Password:</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    className='form-control'
                                    type="password"
                                    name="password"
                                />
                            </div>
                            {formErrors.password && <small className='text-danger'>{formErrors.password}</small>}
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="confirmPass">Confirm Password:</label>
                                <input
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    value={confirmPass}
                                    required
                                    className='form-control'
                                    type="password"
                                    name="confirmPass"
                                />
                            </div>
                            {formErrors.confirmPass && <small className='text-danger'>{formErrors.confirmPass}</small>}
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="gender">Gender:</label>
                                <select
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                    required
                                    className='form-control'
                                    name="gender"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {formErrors.gender && <small className='text-danger'>{formErrors.gender}</small>}
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="age">Age:</label>
                                <input
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                    required
                                    className='form-control'
                                    type="text"
                                    name="age"
                                />
                            </div>
                            {formErrors.age && <small className='text-danger'>{formErrors.age}</small>}
                            <div>
                                <label className='mt-2' htmlFor="address">Address:</label>
                                <input
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    required
                                    className='form-control'
                                    type="text"
                                    name="address"
                                />
                            </div>
                            {formErrors.address && <small className='text-danger'>{formErrors.address}</small>}
                            <button type='submit' className='btn btn-success mt-2'>Submit</button>
                            &nbsp;&nbsp;
                        </form>
                    </div>
                    <div className='col-md-5'>
                        <img
                            style={{ borderRadius: '20px' }}
                            width="100%"
                            height="450px"
                            src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                            alt='no image found'
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
