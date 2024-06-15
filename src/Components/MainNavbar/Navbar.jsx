import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const MainNavbar = () => {

  return (
    
    
    
    
        <Container style={{backgroundColor:'#fff'}}>
          <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
            
              <div className='right-nav'>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              </div>
            
          </Navbar>
        </Container>
      
    
  );
}



export default MainNavbar