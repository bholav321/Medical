import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import { Link, json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleSign from './Googlesignin';

export default function SignIn() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (contact && password) {
          let result = localStorage.getItem("user");
          result = JSON.parse(result)
          console.log(result)
          const token = localStorage.getItem("token");
          console.log(token)
          console.log(token)
            axios.post("http://localhost:2024/user/signin", { token,contact, password }).then(res => {
                console.log(res.data);
                const user = JSON.stringify(res.data.user);
                localStorage.setItem("user", user);
                Swal.fire({
                    icon: 'success',
                    title: 'Sign In successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setContact("");
                setPassword("");
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

    return (
        <>
            <Header />
            <div className='mt-5'>
                <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5'>
                        <img
                            style={{ borderRadius: '20px' }}
                            width="100%"
                            height="500px"
                            src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                            alt='no image found'
                        />
                    </div>
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
                            <Link to="/signup">
                                <span className='text-primary'>Create New ?</span>
                            </Link>
                        </form>
                        <h5 className='text-center p-2'>or</h5>
                       {/* <h4 className='text-center'><span className='rounded border p-2'>Continue with Google</span>
                        </h4> */}
                        <GoogleSign/>
                    </div>
                </section>
            </div>
        </>
    );
}
