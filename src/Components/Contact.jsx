import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
        <div className="container mt-4 min-vh-70">
            <div className="row all-container p-3">
                <div className="first-container p-4 col-12 col-md-6">
                <span className='d-block p-2'>Make an order</span>
                <span className='p-2'>The following are our contacts. Place an order</span>
                <div className="icons p-2">
                    <div className="phone-number">
                        < i class='bx  bx-phone p-2'></i> 
                        <span>Phone</span>
                        <span className='d-block ms-4'>(+250) 786677447</span>
                    </div>
                    <div className="email">
                        < i class='bx  bx-mail-open p-2'></i> 
                        <span>Email</span>
                        <span className='d-block ms-4'>rukundof993@gmail.com</span>
                    </div>
                    <div className="address">
                        < i class='bx  bx-location-pin p-2'></i> 
                        <span>Address</span>
                        <span className='d-block ms-4'>Downtown | Kigali city</span>
                    </div>
                </div>
            </div>

                <div className="second-container col-12 col-md-6">
                <span>Contact us!</span>
                <div className="row">
                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Full Name</label>
                             <input type="text" className='inputs'/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Email</label>
                            <input type="text" className='inputs'/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Phone Number</label>
                             <input type="text" className='inputs'/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Email Subject</label>
                             <input type="text" className='inputs'/>
                        </div>
                    </div>

                    <div className="col-12 p-2">
                        <div className="inputs-wrapper">
                            <label>Message</label>
                            <textarea name="" id="" className='textArea'></textarea>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button>Send Message</button>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Contact