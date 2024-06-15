import React from 'react'
import './Test.css'
import img from './../../assets/react.svg'
const Test = () => {
  return (
    <div className='zh-category'>
      <div className='box'>
        <div className='content'>
          <img src={img}/>
          <h2>Quiz Time<br/><span>Let's start</span></h2>
          <a href='#'>Click</a>
        </div>
      </div>
    </div>
  )
}

export default Test