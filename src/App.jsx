import React from 'react'
import Navbar from './Components/Navbar'
import NewArrival from './Components/NewArrival'
import Card from './Components/Card'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import Test from './Components/Test'

const App = () => {
  return (
    <div>
      <Navbar/>
      <NewArrival/>
      <Card/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* <Test/> */}
    </div>
  )
}

export default App