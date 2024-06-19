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
    </>
}
