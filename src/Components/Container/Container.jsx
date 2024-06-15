import React from 'react'
import './Container.css'
import Details from '../Details/Details'
import project1 from './../../assets/web design- creativezaiid 1.png'
const Container = () => {
  return (
    <div className='cont' >
        <Details img={project1}
             title='Chicken'
             desc='I designed a website for the restaurant Chicken, 
             featuring an elegant and user-friendly interface to showcase their menu offerings and services.'
             />
    </div>
  )
}

export default Container