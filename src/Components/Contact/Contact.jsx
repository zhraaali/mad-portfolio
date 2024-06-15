import React from 'react'
import './Contact.css'
import phone from './../../assets/Frame 4.png'
import emailimg from './../../assets/Group 28.png'
const Contact = () => {
  return (
    <div className='contact'>
        <h4 style={{color:'#1572B6'}}>Contact</h4>
        <h4>Don’t hesitate to call me</h4>
        <div className='contact-inner'>
            <div className='contact-inner'>
            <img src={phone}/>
            <div>
            <h4>Phone Number</h4>
            <p>+963 938 538 446</p>
            </div>
            </div>
            <div className='contact-inner'>
            <img src={emailimg}/>
            <div>
            <h5>Email</h5>
            <p>hanihadid.22@gmail.com</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact