import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Home() {
    return <>
    <Header/>
        <section id="hero" class="d-flex align-items-center">
            <div class="container text-center position-relative">
                <h1>24/7 Care is available</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti.</h2>
                <a href="#about" class="main-btn">Get Started</a>
            </div>
        </section>
        <footer class="footer py-4 p-2 mt-5">
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
    </>
}
