import React from 'react'
import './Details.css'
import gitimg from './../../assets/Vector (6).png'
import demo from './../../assets/Group 7.png'
const Details = (props) => {
  return (
    <div className='details'>
        <img src={props.img}/>
        <div className='details-inner'>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
            <div>
                <span style={{fontWeight:'900',fontSize:'1.5em',marginRight:'10px'}}>React</span>
                <span style={{fontWeight:'900',fontSize:'1.5em'}}>SCSS</span>
            </div>
            <div className='details-imgs'>
                <div >
                    <span>code</span>
                    <img src={gitimg}/>
                </div>
                <div>
                <span>Live demo</span>
                    <img src={demo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details