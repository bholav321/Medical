import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let userId = localStorage.getItem("userId");
    return <>
        {/* <h1>Profile Page</h1> */}
        <div className="container-fluid mt-5">

            <section className='row container m-auto'>
                <div className='col-md-3 border p-4'>
                    <div className='container border' style={{ borderRadius: '50%', width: '150px', height: '150px' }}>
                        <img src='https://www.shareicon.net/data/2016/05/24/770117_people_512x512.png' width="100%" height="100%" />
                    </div>
                    <h5 className='text-center mt-2'>{user.username}</h5>
                    <div className='mt-3'>
                        <ul className='list-unstyled fs-3'>
                            <Link to="">
                            <li>Profile</li>
                            </Link>
                            <li>b</li>
                            <Link to="contact">
                            <li>Consult</li>
                            </Link>
                            <li>d</li>
                            <li>e</li>
                        </ul>
                    </div>
                    <center>
                        <button className='btn btn-light border fs-5'><FaSignOutAlt />logout</button>
                    </center>
                </div>
                <div className='col-md-9 border'>
                   <Outlet/>
                </div>
            </section>
        </div>
    </>
}

export default Profile