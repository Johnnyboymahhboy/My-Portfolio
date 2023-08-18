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
            <h1 className='text-heading1'>About Me</h1>
            <p>Hey, i am John Web designer and and developer from Cebu City. I create costum websites to help business do better online</p>
                <p>I love combining the worlds of logic and creative design to make eye catching, accessible, and user friendly websites and application. </p>
                <p>I'm a passionate web developer with a strong foundation in front-end and back-end technologies. With a keen eye for design and a commitment to creating clean, efficient code, I strive to deliver engaging and user-friendly web experiences.</p>
                <p> dedicated and creative web developer with a passion for transforming ideas into captivating digital experiences. With a strong foundation in both front-end and back-end technologies, I immerse myself in the dynamic world of web development to create seamless, user-centric solutions </p>
                <div className='btaa'>
               <a className='downloadBtn' href='https://drive.google.com/uc?export=download&id=1a9ZF5LbatRIN_DPGAyEhMLj3iEtRmnvW' download="ResumeDen-1.pdf">Download Cv</a>
               </div>
            </div>
          </div>
        </div>
        </>

        
  )
}

export default About
