import React from 'react'

function Constults() {
    let DB;

let form = document.querySelector('form');
let patientName = document.querySelector('#patient-name');
let contact = document.querySelector('#contact');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let symptoms = document.querySelector('#symptoms');
let consultations = document.querySelector('#consultations');
let services = document.querySelector('#services');

document.addEventListener('DOMContentLoaded', () => {
     // create the database
     let ScheduleDB = window.indexedDB.open('consultations', 1);

     // if there's an error
     ScheduleDB.onerror = function() {
          console.log('error');
     }
     // if everything is fine, assign the result is to the (letDB) instance 
     ScheduleDB.onsuccess = function() {
          // console.log('Database Ready');

          
          DB = ScheduleDB.result;

          showConsultations();
     }

   
     ScheduleDB.onupgradeneeded = function(e) {
          
          let db = e.target.result;
          
          let objectStore = db.createObjectStore('consultations', { keyPath: 'key', autoIncrement: true } );

        
          objectStore.createIndex('patientname', 'patientname', { unique: false } );
          objectStore.createIndex('contact', 'contact', { unique: false } );
          objectStore.createIndex('date', 'date', { unique: false } );
          objectStore.createIndex('time', 'time', { unique: false } );
          objectStore.createIndex('symptoms', 'symptoms', { unique: false } );

          //console.log('Database ready and fields created!');
     }

     form.addEventListener('submit', addConsultations);

     function addConsultations(e) {
          e.preventDefault();
          let newConsultation = {
               patientname : patientName.value,
               
             contact : contact.value,
               date : date.value,
            time : time.value,
               symptoms : symptoms.value
          }
          
          let transaction = DB.transaction(['consultations'], 'readwrite');
          let objectStore = transaction.objectStore('consultations');

          let request = objectStore.add(newConsultation);
                    request.onsuccess = () => {
               form.reset();
          }
          transaction.oncomplete = () => {
               //console.log('New schedule added');

               showConsultations();
          }
          transaction.onerror = () => {
              //console.log();
          }

     }
     function showConsultations() {
       
          while(consultations.firstChild) {
            consultations.removeChild(consultations.firstChild);
          }
         
          let objectStore = DB.transaction('consultations').objectStore('consultations');

          objectStore.openCursor().onsuccess = function(e) {
               
               let cursor = e.target.result;
               if(cursor) {
                    let ConsultationHTML = document.createElement('li');
                    ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
                    ConsultationHTML.classList.add('list-group-item');
                    
                 
                    ConsultationHTML.innerHTML = `  
                         <p class="font-weight-bold">Patient Name:  <span class="font-weight-normal">${cursor.value.patientname}<span></p>
                          <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${cursor.value.contact}<span></p>
                         <p class="font-weight-bold">Date:  <span class="font-weight-normal">${cursor.value.date}<span></p>
                         <p class="font-weight-bold">Time:  <span class="font-weight-normal">${cursor.value.time}<span></p>
                         <p class="font-weight-bold">Symptoms:  <span class="font-weight-normal">${cursor.value.symptoms}<span></p>
                    `;

                    
                    const cancelBtn = document.createElement('button');
                    cancelBtn.classList.add('btn', 'btn-danger');
                    cancelBtn.innerHTML = 'Cancel';
                    cancelBtn.onclick = removeConsultation;
               
                 
                    ConsultationHTML.appendChild(cancelBtn);
                 consultations.appendChild(ConsultationHTML);

                    cursor.continue();
               } else {
                    if(!consultations.firstChild) {
                        services.textContent = 'Change your visiting hours';
                         let noSchedule = document.createElement('p');
                         noSchedule.classList.add('text-center');
                         noSchedule.textContent = 'No results Found';
                      consultations.appendChild(noSchedule);
                    } else {
                        services.textContent = 'Cancel Your consultations'
                    }
               }
          }
     }

          function removeConsultation(e) {
       
          let scheduleID = Number( e.target.parentElement.getAttribute('data-consultation-id') );
         
          let transaction = DB.transaction(['consultations'], 'readwrite');
          let objectStore = transaction.objectStore('consultations');
         
          objectStore.delete(scheduleID);

          transaction.oncomplete = () => {
             
               e.target.parentElement.parentElement.removeChild( e.target.parentElement );

               if(!consultations.firstChild) {
                   
                    services.textContent = 'Change your visiting hours';
                   
                   let noSchedule = document.createElement('p');
                  
                   noSchedule.classList.add('text-center');
                   
                   noSchedule.textContent = 'No results Found';
                
                    consultations.appendChild(noSchedule);
               } else {
                   services.textContent = 'Cancel your Consultation'
               }
          }
     }

});
  return (
    <body>
      <nav class="navbar navbar-expand-lg nav-back fixed-top"
        id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#">Medical</a>
          <button class="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation"><i class="fas fa-syringe fa-2x"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a class="nav-link"
                href="#about">Services</a></li>
              <li class="nav-item"><a class="nav-link"
                href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link"
                href="#about">Medical Camps</a></li>
              <li class="nav-item"><a class="nav-link"
                href="#projects">Team</a></li>
              <li class="nav-item"><a class="nav-link"
                href="#signup">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative">
          <h1>24/7 Care is available</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti.</h2>
          <a href="#about" class="main-btn">Get Started</a>
        </div>
      </section>

      <div class="container mt-4 p-4">
        <div class="row">
          <div class="col-md-10">
            <h2 class="text-center my-4">
              Find Consultations
            </h2>
            <form>
              <div class="form-group row">
                <label class="col-sm-4 col-lg-4">
                  Patient Name
                </label>
                <div class="col-sm-8 col-lg-8">
                  <input type="text" id="patient-name" class="form-control"
                    placeholder="Name" required />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-4 col-lg-4">
                  Contact
                </label>
                <div class="col-sm-8 col-lg-8">
                  <input type="tel" id="contact" class="form-control"
                    placeholder="123" required/>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 col-lg-4">
                  Date
                </label>
                <div class="col-sm-8 col-lg-8">
                  <input type="date" id="date" class="form-control"/>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-4 col-lg-4">
                  Time
                </label>
                <div class="col-sm-8 col-lg-8">
                  <input type="time" id="time" class="form-control" />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-4 col-lg-4">
                  Symptoms
                </label>
                <div class="col-sm-8 col-lg-8">
                  <textarea id="symptoms" class="form-control" required></textarea>
                </div>
              </div>

              <div class="form-group row justify-content-end">
                <div class="col-sm-5">
                  <button type="submit" class="btn btn-form">
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