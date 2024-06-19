import React, { useState } from 'react'
import Header from './Header';

function Constults() {
    const [name,setName] = useState(null);
    const [contact,setContact] = useState(null);
    const [date,setDate] = useState(null);
    const [time,setTime] = useState(null);
    const [symptoms,setSymptoms] = useState(null);
    const submitForm = ()=>{
        alert(name+" "+contact+" "+date+" "+time+" "+symptoms)
    }
    return (
        <body>
            <Header />
            <div class="container mt-5 p-4">
                <div class="row">
                    <div class="col-md-10">
                        <h2 class="text-center my-4 p-2">
                            Find Consultations
                        </h2>
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-4 col-lg-4">
                                    Patient Name
                                </label>
                                <div class="col-sm-8 col-lg-8">
                                    <input onChange={(e)=>setName(e.target.value)} type="text" id="patient-name" class="form-control"
                                        placeholder="Name" required />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-lg-4">
                                    Contact
                                </label>
                                <div class="col-sm-8 col-lg-8">
                                    <input onChange={(e)=>setContact(e.target.value) }type="tel" id="contact" class="form-control"
                                        placeholder="123" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-lg-4">
                                    Date
                                </label>
                                <div class="col-sm-8 col-lg-8">
                                    <input onChange={(e)=>setDate(e.target.value)} type="date" id="date" class="form-control" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-lg-4">
                                    Time
                                </label>
                                <div class="col-sm-8 col-lg-8">
                                    <input onChange={(e)=>setTime(e.target.value)} setTime type="time" id="time" class="form-control" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-4 col-lg-4">
                                    Symptoms
                                </label>
                                <div class="col-sm-8 col-lg-8">
                                    <textarea onChange={(e)=>setSymptoms(e.target.value)} id="symptoms" class="form-control" required></textarea>
                                </div>
                            </div>

                            <div class="form-group row justify-content-end">
                                <div class="col-sm-5">
                                    <button type="submit" onClick={submitForm}  class="btn btn-form">
                                        Confirm
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="col-md-6">
                        <h2 id="services" class="text-center my-4"></h2>
                        <ul id="consultations" class="list-group"></ul>
                    </div>
                </div>
            </div>
            <footer class="footer py-4 mt-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-back btn-social mx-2" href="#!">
                                <i class="fab fa-twitter"></i></a>
                            <a class="btn btn-back btn-social mx-2" href="#!">
                                <i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-back btn-social mx-2" href="#!">
                                <i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="col-lg-4 text-lg-right">
                            <a class="mr-3 text" href="#!">Privacy Policy</a>
                            <a href="#!" class="text">Terms of Use</a></div>
                    </div>
                </div>
            </footer>
        </body>
    );
}

export default Constults