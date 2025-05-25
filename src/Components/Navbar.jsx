import React from 'react'
import './navBar.css'
import HomeImage from '../assets/Home-image.png'
const Navbar = () => {
  return (
    <div className="container-fluid bg-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-4">
        <a className="navbar-brand font text-white" href="#">La muse</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex mx-auto justify-content-center fs-6 fw-semibold">
                 <li className="nav-item active">
                    <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item ">
                     <a className="nav-link text-white" href="#">Shop</a>
                </li>
                 <li className="nav-item">
                     <a className="nav-link text-white" href="#">Testimonials</a>
                 </li>
                <li class="nav-item">
                      <a className="nav-link text-white" href="#">Contact</a>
                 </li>
            </ul>
        </div>
    </nav>

    <div className="container d-flex align-items-center">
        <div className="container text-white p-4 p-lg-0">
            <span className='d-block font-langar pb-2'>Elevate your style</span>
            <span>Dive into summer in style! For a limited time,enjoy 50% off our hottest women's and men's fashion. It's your session to shine</span>
        </div>

         <div className="image">
            <img src= {HomeImage} className='img-fluid d-none d-md-block' style={{ width: '70rem' }} alt='A home image showing fashion'/>
        </div>
    </div>
    </div>
   
  )
}

export default Navbar