import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid p-0' data-aos = "fade-up" data-aos-easing="ease-in-out">
      <div className="svg position-relative">
        <div className="social-media">
          <span className='d-block text-center text-white creative'>Creative Developer</span>
          <div className="icons-footer">
            <a href='https://www.instagram.com/divin_d1/' target='_blank'><i className="fa-brands fa-instagram icon-footer"></i></a>
            <a href='mailto: rukundof993@gmail.com' target='_blank'>< i className='bx  bx-mail-open icon-footer'></i> </a>
            <a href='http://www.linkedin.com/in/rukundo-furaha-divin-66a46932a' target='_blank'><i className="fa-brands fa-linkedin icon-footer"></i></a>
          </div>
        </div>
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style={{width: '100%',height: "300px"}}>
          <defs>
    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="30%" stopColor="#022f72" />
      <stop offset="100%" stopColor="#022f72" />
    </linearGradient>
  </defs>
  <path fill="url(#blobGradient)" d="
    M150,175 
    C110,170 60,150 50,110 
    C40,70 80,30 150,35 
    C220,40 260,70 250,110 
    C240,150 190,170 160,172 
    L155,190 Q152,195 148,190 L145,172 
    C130,170 110,170 150,175 
    Z" />
    </svg>
      </div>

    </div>
  )
}

export default Footer