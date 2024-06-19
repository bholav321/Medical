import { Link } from 'react-router-dom'
import React from 'react'
export default function Header() {
    return <>
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
                        <Link to="/">
                            <li class="nav-item"><a class="nav-link"
                                href="#about">Home</a></li>
                        </Link>
                        <li class="nav-item"><a class="nav-link"
                            href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link"
                            href="#about">Medical Camps</a></li>
                        <Link to="/consult">
                            <li class="nav-item"><a class="nav-link"
                                href="#projects">Consult</a></li>
                        </Link>
                        <li class="nav-item"><a class="nav-link"
                            href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
