import React, { useEffect } from 'react'
import './contact.css'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Contact = () => {
    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [emailSubject,setEmailSubject] = useState('')
    const [message,setMessage] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error,setError] = useState('')

    useEffect(()=>{
        if(error){
            toast.error(error,{
            duration: 5000,
            icon: '🚫'
        })
        }
    },[error])

    const handleContent = async()=>{
        if(!fullName || !email || !emailSubject || !message || !phoneNumber){
            const msg = 'Please fill out all the fields'
            setError(msg)
        }else{
            try {
                const response = await axios.post("https://la-muse-backend-bp7f.onrender.com/send",{
                    fullName,
                    email,
                    emailSubject,
                    message,
                    phoneNumber
                })
                toast.success(response.data.message)
                setFullName('')
                setEmail('')
                setEmailSubject('')
                setPhoneNumber('')
                setMessage('')
                setError('')
            } catch (error) {
                if(error.response){
                    const msg = error.response.data.message
                    setError(msg)
                }else{
                    // console.log('Backend URL:', process.env.REACT_APP_URL_BACKEND);
                    setError("Server error")
                }

            }
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        handleContent()
    }
  return (
    <div>
        <div className="container mt-4 min-vh-70" id= "contact" data-aos = "fade-up" data-aos-easing="ease-in-out">
            <span className='text-center d-block p-3 contact'>Contact <span>us</span></span>
            <div className="row all-container p-3">
                <div className="first-container col-12 col-md-6">
                <span className='d-block p-2 order'>Make an order</span>
                <span className='p-1 description'>The following are our contacts. Place an order</span>
                <div className="icons-contact p-1">
                    <div className="phone-number">
                        < i className='bx  bx-phone'></i> 
                        <span className='description p-2'>Phone</span>
                        <span className='d-block ms-4 ps-3'>(+250) 786677447</span>
                    </div>
                    <div className="email">
                        < i className='bx  bx-mail-open'></i> 
                        <span className='description p-2'>Email</span>
                        <span className='d-block ms-4 ps-3'>rukundof993@gmail.com</span>
                    </div>
                    <div className="address">
                        < i className='bx  bx-location-pin'></i> 
                        <span className='description p-2'>Address</span>
                        <span className='d-block ms-4 ps-3'>Downtown | Kigali city</span>
                    </div>
                </div>
            </div>
            <form className="second-container col-12 col-md-6" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Full Name</label>
                             <input type="text" className='inputs' value={fullName} onChange={(e)=>{setFullName(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Email</label>
                            <input type="text" className='inputs' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Phone Number</label>
                             <input type="text" className='inputs' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <div className="inputs-wrapper">
                            <label>Email Subject</label>
                             <input type="text" className='inputs' value={emailSubject} onChange={(e)=>{setEmailSubject(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="col-12 p-2">
                        <div className="inputs-wrapper">
                            <label>Message</label>
                            <textarea className='textArea' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Send Message</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact