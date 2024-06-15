import React from 'react'
import './Footer.css'
import linked from './../../assets/Group 17.png'
import git from './../../assets/Vector (8).png'
const Footer = () => {
  return (
    <div className='footer'>
        <h5>Copyright c 2024.All rights are reserved.</h5>
        <div className='footer-img'>
        <img className='img' src={git}/>
        <img src={linked}/>
        </div>
    </div>
  )
}

export default Footer