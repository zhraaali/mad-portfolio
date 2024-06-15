import React from 'react'
import Details from '../Details/Details'
import project1 from './../../assets/Frame 1 1 (1).png'
import './Portfolio.css'
import Container from '../Container/Container'
import project3 from './../../assets/web design- creativezaiid 2.png'
import Button from 'react-bootstrap/Button';
const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div>
        <h4>Portfolio</h4>
        <h4>I would like to present my portfolio for your consideration.</h4>
    </div>
    <Details img={project1}
             title='Erick Coffee'
             desc='The website features a modern and sleek design, showcasing Erick Coffees products and brand story'
    />
    <Container  />
    <Details img={project3}
             title='Elevate'
             desc='I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use.
              This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options.'
    />
    <Button  variant="primary">See more</Button>{' '}
    </div>
  )
}

export default Portfolio