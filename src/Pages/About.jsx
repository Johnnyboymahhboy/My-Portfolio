import React from 'react'
import second from '../assets/second.jpg'
import './PagesStyleCss/abpage.css'
function About() {
  return (
        <>
         <div className='aboutme-container1'>
          <div className='text-container1'>
            
                  <img className='img1' src={second} alt="" />
           
            <div className='para-container1'>
            <h1 className='text-heading1'>About Portfolio Minimal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex impedit incidunt alias esse tempore</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet ut quam alias veritatis officia velit eligendi animi cupiditate maxime accusamus voluptatibus incidunt corrupti aliquid iusto, deleniti voluptates dicta magni!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, nisi autem unde quibusdam nesciunt libero consectetur cumque reprehenderit quasi at nobis! Doloribus sed necessitatibus amet modi eveniet doloremque ipsa esse.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae facere nemo libero dicta consequuntur quia deleniti possimus officia accusamus odit itaque debitis sunt, vero blanditiis. Ipsam repudiandae maxime voluptates aliquam. </p>
               <button className='downloadBtn1'>Download Cv</button>
            </div>
          </div>
        </div>
        </>
  )
}

export default About
