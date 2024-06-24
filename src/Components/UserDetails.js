import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';
import axios from 'axios';

function UserDetails() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let userId = user._id;
    const [disabled, setDisabled] = useState(true);
    const [disabledEntity, setDisabledEntity] = useState(true);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [name, setName] = useState(user.username);
    const [firstname, setFirstname] = useState(user.username.split(" ")[0]);
    const [lastname, setLastname] = useState(user.username.split(" ")[1]);


    const enablePassword = () => {
        setDisabled(!disabled);
    };

    const enableEntity = () => {
        setDisabledEntity(!disabledEntity);
    };
    const editProfile = () => {
        const updatedName = firstname + " " + lastname;
        localStorage.setItem("user", JSON.stringify({username: updatedName, email, contact, _id:userId }));
        axios.post("http://localhost:2024/user/updatedetail", { username: updatedName, email, contact, userId })
            .then((result) => {
                const updatedUser = result.data.user;
                setName(updatedUser.username);
                setEmail(updatedUser.email);
                setContact(updatedUser.contact);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile Updated",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                    showConfirmButton: true,
                });
            });
    };

    const changePassword = () => {
        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                showConfirmButton: true,
            });
            return;
        }

        axios.post("http://localhost:2024/user/updatePassword", {
            email,
            password: oldPassword,
            newPassword: newPassword,
        })
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                     title: "Password Updated",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setNewPassword("");
                setOldPassword("");
                setConfirmPassword("");
                setDisabled(true);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: err.response.data.message,
                    showConfirmButton: true,
                });
                setDisabled(true);
            });
    };

    return <>
        <div className="card p-4 w-100" style={{ backgroundColor: "white" }}>
            <h5 className="fw-bold mb-4">Edit Your Profile <FiEdit onClick={enableEntity} className="float-end text-primary" style={{ cursor: 'pointer' }} /></h5>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name*</label>
                    <input defaultValue={firstname} type="text" onChange={(event) => setFirstname(event.target.value)} disabled={disabledEntity} className="form-control" id="firstName" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                    <input defaultValue={lastname} type="text" onChange={(event) => setLastname(event.target.value)} disabled={disabledEntity} className="form-control" id="lastName" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input defaultValue={email} type="email" disabled={disabledEntity} onChange={(event) => setEmail(event.target.value)} className="form-control" id="email" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="address" className="form-label">Contact*</label>
                    <input defaultValue={contact} type="text" disabled={disabledEntity} onChange={(event) => setContact(event.target.value)} className="form-control" id="address" required />
                </div>
                <div className="col-md-12">
                    <button onClick={editProfile} className="btn btn-primary" type="button">Save Changes</button>
                </div>
            </div>
            <div className="mt-4">
                <h5 className="fw-bold">Password Changes <FiEdit onClick={enablePassword} className="float-end text-primary" style={{ cursor: 'pointer' }} /></h5>
                <div className="row g-4">
                    <div className="col-md-12">
                        <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="oldPassword" placeholder="Current Password" required />
                    </div>
                    <div className="col-md-12">
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="newPassword" placeholder="New Password" required />
                    </div>
                    <div className="col-md-12">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" required />
                    </div>
                    <div className="col-md-12">
                        <button onClick={changePassword} className="btn btn-primary" type="button">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserDetails