import React, { useEffect } from 'react'
import './Hero.css'
import img from './../../assets/zhraa9_n.jpg'
import githubimg from './../../assets/Vector (6).png'
import linkedinimg from './../../assets/Vector (7).png'
import htmlimg from './../../assets/vscode-icons_file-type-html.png'
import cssimg from './../../assets/vscode-icons_file-type-css.png'
import tailwindimg from './../../assets/Vector (5).png'
import jsimg from './../../assets/Group 5.png'
import reactimg from './../../assets/logos_react.png'
import sass from './../../assets/Vector (3).png'
const Hero = () => {
    useEffect(() => {
        const imageElement = document.querySelector('.rotating-image');
        // Set initial position off-screen to the left
        imageElement.style.left = '-45px';
      }, []);
  return (
    <div className='hero'>
    <div className="rotating-image" >
    <img src={htmlimg} alt="Image description"  />
    </div>
    <div className="rotating-image2" >
    <img src={cssimg} alt="Image description"  />
    </div>
    <div className="rotating-image3" style={{display:'flex',justifyContent:'center'}}>
    <img src={tailwindimg} alt="Image description"  />
    </div>
    <div className="rotating-image4" >
    <img src={jsimg} alt="Image description"  />
    </div>
    <div className="rotating-image5" >
    <img src={reactimg} alt="Image description"  />
    </div>
    <div className="rotating-image6" >
    <img src={sass} alt="Image description"  />
    </div>

        <div className='hero-inner'>
            <div className='hero-content'>
                <h1>Front-End React Developer</h1>
                <p>Hi, I am Hani Hadid, a passionate Front-End Developer from Syria </p>
                <div className='img-social'>
                    <img src={githubimg}/>
                    <img src={linkedinimg}/>
                </div>
                <h3>Tech stack<span style={{marginLeft:'5%'}}>|</span></h3>
            </div>
            <div className='circular-border'>
                <img src={img}/>
            </div>

        </div>
    </div>
  )
}

export default Hero