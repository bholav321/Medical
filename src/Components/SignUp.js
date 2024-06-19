import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function SignUp() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (name && contact && password && confirmPass) {
            if (password !== confirmPass) {
                alert("Password and Confirm Password do not match");
            } else {
                // "Api call"
                axios.post("http://localhost:2024/user/signup", { username: name, contact, password }).then(res => {
                    console.log(res.data);
                    const user = JSON.stringify(res.data);
                    localStorage.setItem("user", user)
                    Swal.fire({
                        icon: 'success',
                        title: 'Sign Up successfully',
                        showConfirmButton: false,
                        timer: 1500
                    }); setContact("");
                    setPassword("");
                    setName("");
                    setConfirmPass("");
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

    return (<>
        <Header />
        <div className='mt-5'>
            <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                <div className='col-md-5 p-3'>
                    <h1 className='text-center'>Sign Up</h1>
                    <form method='post' className='form-group' onSubmit={submitForm}>
                        <label className='mt-2' htmlFor='name'>Name:</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} required className='form-control' type='text' placeholder='' />
                        <label className='mt-2' htmlFor="contct">Contact:</label>
                        <input onChange={(e) => setContact(e.target.value)} value={contact} required className='form-control' type="number" name="email" />
                        <label className='mt-2' htmlFor="password">Password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} required className='form-control' type="password" name="password" />
                        <label className='mt-2' htmlFor="confirmPass">Confirm Password:</label>
                        <input onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} required className='form-control' type="password" name="confirmPass" />
                        <button type='submit' className='btn btn-success mt-2'>Sign Up</button>
                        &nbsp;&nbsp;
                        <Link to="/signin">
                            <span className='text-primary'>Already have an account?</span>
                        </Link>
                    </form>
                </div>
                <div className='col-md-5'>
                    <img style={{ borderRadius: '20px' }} width="100%" height="500px" src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' alt='no image found' />
                </div>
            </section>
        </div>
    </>
    );
}
