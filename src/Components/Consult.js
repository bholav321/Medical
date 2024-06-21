import React, { useState } from 'react'

function Consult() {
    const [name, setName] = useState(null);
    const [contact, setContact] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [symptoms, setSymptoms] = useState(null);
    const submitForm = () => {
        if (name && contact && date && time && symptoms) {
            console.log("Form submitted successfully");
            alert(name + " " + contact + " " + date + " " + time + " " + symptoms)
        }
    }
    return <>
        <div className='col-md-10 w-75'>

            <h2 class="text-center my-4 p-2">
                Find Consultations
            </h2>
            <form>
                <div class="form-group row">
                    <label class="col-sm-4 col-lg-4">
                        Patient Name
                    </label>
                    <div class="col-sm-8 col-lg-8">
                        <input onChange={(e) => setName(e.target.value)} type="text" id="patient-name" class="form-control"
                            placeholder="Name" required />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-lg-4">
                        Contact
                    </label>
                    <div class="col-sm-8 col-lg-8">
                        <input onChange={(e) => setContact(e.target.value)} type="tel" id="contact" class="form-control"
                            placeholder="123" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 col-lg-4">
                        Date
                    </label>
                    <div class="col-sm-8 col-lg-8">
                        <input required onChange={(e) => setDate(e.target.value)} type="date" id="date" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-lg-4">
                        Time
                    </label>
                    <div class="col-sm-8 col-lg-8">
                        <input required onChange={(e) => setTime(e.target.value)} setTime type="time" id="time" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-lg-4">
                        Symptoms
                    </label>
                    <div class="col-sm-8 col-lg-8">
                        <textarea onChange={(e) => setSymptoms(e.target.value)} id="symptoms" class="form-control" required></textarea>
                    </div>
                </div>

                <div class="form-group row justify-content-end">
                    <div class="col-sm-5">
                        <button type="submit" onClick={submitForm} class="btn btn-form">
                            Confirm
                        </button>
                    </div>
                </div>

            </form>
        </div>
    </>
}

export default Consult;