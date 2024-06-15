import React from 'react'
import './App.css'
import MainNavbar from './Components/MainNavbar/Navbar'
import Test from './Components/Test/Test'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

// import Navbar from './Components/MainNavbar/Navbar'
const App = () => {
  return (
    <div>
      <MainNavbar/>
      {/* <Test/> */}
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
