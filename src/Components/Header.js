import { Link } from 'react-router-dom'
import React from 'react'
export default function Header() {
    return <>
        <nav class="navbar navbar-expand-lg bg-primary nav-back sticky-top"
            id="mainNav">
            <div class="container">
                <h1>Medical</h1>
                <button style={{zIndex:1,backgroundColor:"black"}} class="navbar-toggler navbar-toggler-right" type="button"
                    data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><i class="fas fa-syringe fa-2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <Link to="/">
                            <li class="nav-item"><a class="nav-link"
                                href="#about">Home</a></li>
                        </Link>
                        <li class="nav-item"><a class="nav-link"
                            href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link"
                            href="#about">Medical Camps</a></li>
                        {/* <Link to="/contact">
                            <li class="nav-item"><a class="nav-link"
                                href="#projects">Consult</a></li>
                        </Link> */}
                        <Link to="/user">
                        <li class="nav-item"><a class="nav-link"
                            href="#signup">Login</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
