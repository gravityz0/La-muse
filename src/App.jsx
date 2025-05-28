import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import NewArrival from './Components/NewArrival'
import Card from './Components/Card'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast'

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })

    const timer = setTimeout(()=>{
    AOS.refresh();
  },500);

  return ()=> clearTimeout(timer)
  },[])


  return (
    <>

      <Toaster position='top-right' reverseOrder={false} toastOptions={{
      duration: 4000,
      style:{
        padding: '16px',
        borderRadius: '10px'
      }
    }}/>

        <Navbar/>
        <NewArrival/>
        <Card/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App