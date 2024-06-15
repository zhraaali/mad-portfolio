import React from 'react'
import './About.css'
import img from './../../assets/0_UnaZKWRx_J94eTVw 1.png'
const About = () => {
  return (
    <div className='about'>
    <img src={img}/>
        <div style={{width:'30vw'}}>
        <h4 style={{marginBottom:'15%'}}>About me</h4>
            <p>Hello, I'm Hani, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently,
             I primarily work with React/Next.js, Tailwind CSS, and TypeScript in my projects.</p>
        </div>
    </div>
  )
}

export default About