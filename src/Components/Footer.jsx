import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid p-0'>
      <div className="svg position-relative">
        <div className="social-media">
          <span className='d-block'>Friends to social media</span>
          <div className="icons"></div>
        </div>
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style={{width: '100%',height: "300px"}}>
          <defs>
    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#87CEFA" />
      <stop offset="100%" stop-color="#00BFFF" />
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