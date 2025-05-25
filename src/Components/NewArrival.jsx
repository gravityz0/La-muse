import React, { useState } from 'react'
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CarouselImg1 from '../assets/Carousel-img-1.jpg'
import CarouselImg2 from '../assets/Carousel-img-2.jpg'
import CarouselImg3 from '../assets/Carousel-img-3.jpg'
import CarouselImg4 from '../assets/Carousel-img-4.jpg'
import CarouselImg5 from '../assets/Carousel-img-5.jpeg'
import CarouselImg6 from '../assets/Carousel-img-6.jpeg'
import CarouselImg7 from '../assets/Carousel-img-7.jpeg'
import CarouselImg8 from '../assets/Carousel-img-8.jpeg'
import CarouselImg9 from '../assets/Carousel-img-9.jpg'
import CarouselImg10 from '../assets/Carousel-img-10.jpg'
import CarouselImg11 from '../assets/Carousel-img-11.jpg'
import CarouselImg12 from '../assets/Carousel-img-12.jpeg'
import CarouselImg13 from '../assets/Carousel-img-13.jpeg'
import CarouselImg14 from '../assets/Carousel-img-14.jpg'
import CarouselImg15 from '../assets/Carousel-img-15.jpg'
import CarouselImg16 from '../assets/Carousel-img-16.jpg'
import './newArrival.css'

const NewArrival = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    useEffect(()=>{
    const carouselElement = document.getElementById('multiImageCarousel')
    if(carouselElement){
        carouselElement.addEventListener('slide.bs.carousel',handleSlide)
    }

    return() =>{
        carouselElement.removeEventListener('slide.bs.carousel',handleSlide)
    }
    },[])

const handleSlide = (e)=>{
    const newIndex = e.to
    setActiveIndex(newIndex)
}

  return (
    <div className='container mt-5'>
        <div className="text">
            <h2 className='text-center'>New Arrivals</h2>
          
                <ul className="nav justify-content-center mt-3">
                    {['Women', 'Men', 'Shoes','Accessories'].map((label,index)=>(
                        <li className="nav-item" key={index}>
                            <a className={`nav-link ${
                                activeIndex === index ? 'text-black fw-bold' : 'text-muted'
                            }`} href="#">{label}</a>
                        </li>
                    ))}
                </ul>
    <div id="multiImageCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner mt-5">
    <div className="carousel-item active">
      <div className="d-flex justify-content-center">

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg1} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg2} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg3} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg4} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-flex justify-content-center">

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg5} className="img-fluid mx-2 hover-img" style={{width: "100%"}}/>
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg6} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}}/>
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg7} className="img-fluid mx-2 hover-img" style={{width: "100%"}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg8} className="img-fluid mx-2 hover-img" style={{width: "100%" ,height:"100%", objectFit: 'cover'}}/>
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="d-flex justify-content-center">

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg9} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>
               
        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg10} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg11} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>


        <div className="position-relative mx-2" style={{width: "25%"}}>
            <img src={CarouselImg12} className="img-fluid mx-2 hover-img" style={{width: "100%"}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="d-flex justify-content-center">

        <div className="position-relative mx-2 " style={{width: "25%"}}>
            <img src={CarouselImg13} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>


        <div className="position-relative mx-2" style={{width: "25%"}}>
            <img src={CarouselImg14} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>


        <div className="position-relative mx-2" style={{width: "25%"}}>
            <img src={CarouselImg15} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div>
        </div>

        <div className="position-relative mx-2" style={{width: "25%" ,height: "100%"}}>
            <img src={CarouselImg16} className="img-fluid mx-2 hover-img" style={{width: "100%",height:"100%", objectFit: 'cover'}} />
            <div className="overlay">
                <h5>Skirt</h5>
                <p>$49.20</p>
            </div> 
        </div>
      </div>
    </div>
  </div>

        <button className="carousel-control-prev fw-bold" type="button" data-bs-target="#multiImageCarousel" data-bs-slide="prev">
            <i className="bi bi-chevron-left fs-1 fw-bold text-white"></i>
        </button>
        <button className="carousel-control-next fw-bold" type="button" data-bs-target="#multiImageCarousel" data-bs-slide="next">
            <i className="bi bi-chevron-right fs-1 fw-bold text-white"></i>
        </button>
</div>

        </div>
    </div>
  )
}

export default NewArrival