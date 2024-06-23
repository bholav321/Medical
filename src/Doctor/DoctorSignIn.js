import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link, json } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleSign from '../Components/Googlesignin';
export default function DoctorSignIn() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (contact && password) {
          let result = localStorage.getItem("user");
          result = JSON.parse(result)
          console.log(result)
          const token = result.token;
          console.log(token)
          console.log(token)
            axios.post("http://localhost:2024/doctor/signin", { token,contact, password }).then(res => {
                console.log(res.data);
                const user = JSON.stringify(res.data);
                localStorage.setItem("user", user);
                Swal.fire({
                    icon: 'success',
                    title: 'Sign In successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setContact("");
                setPassword("");
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

    return (
        <>
            <Header />
            <div className='mt-5'>
                <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                   
                    <div className='col-md-5 p-3'>
                        <h1 className='text-center'>Sign In</h1>
                        <form method='post' className='form-group' onSubmit={submitForm}>
                            <label className='mt-2' htmlFor="contact">Contact:</label>
                            <input
                                onChange={(e) => setContact(e.target.value)}
                                value={contact}
                                required
                                className='form-control'
                                type="number"
                                name="contact"
                            />
                            <label className='mt-2' htmlFor="password">Password:</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                className='form-control'
                                type="password"
                                name="password"
                            />
                            <button type='submit' className='btn btn-success mt-2'>Sign In</button>
                            &nbsp;&nbsp;
                            <Link to="/doctorsignup">
                                <span className='text-primary'>Create New ?</span>
                            </Link>
                        </form>
                        <h5 className='text-center p-2'>or</h5>
                       {/* <h4 className='text-center'><span className='rounded border p-2'>Continue with Google</span>
                        </h4> */}
                        <GoogleSign/>
                    </div>
                    <div className='col-md-5'>
                        <img
                            style={{ borderRadius: '20px' }}
                            width="100%"
                            height="500px"
                            src='https://i.pinimg.com/736x/c5/6e/e7/c56ee7944c0e67a8560d1847aee68fd2.jpg'
                            alt='no image found'
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
