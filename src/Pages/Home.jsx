import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PagesStyleCss/HomeStyle.css'
import './PagesStyleCss/aboutextension.css'
import './PagesStyleCss/exp.css'
import Img from '../assets/profile.jpg'
import Contact from '../Pages/Contact'

import { MdPeopleOutline } from 'react-icons/md';
import { MdWifi } from 'react-icons/md';
import { MdOutlineContentPasteSearch } from 'react-icons/md';



function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div className='home-container'>
        <div className='start-introducing'>
                  <div className='Welcome'>
                    <p className='welcome-p'>Hello There!</p>
                  </div>
                  <div className='cen'>
                    <h2>Im <span className='name'>John Densing</span></h2>
                    <h2>A web developer</h2>
                    <h2>and web designer..</h2>
                  </div>
                  <div className='outro'>
                    <p>I've been developing websites since 2019. i am profecient in ui design</p>
                    <p>User experiense and Web Development..</p>
                  </div>
                  <div className='btns'>
                    <button className='btnHire' onClick={() => navigate('/My-Portfolio/contact')} >Hire me</button>
                  </div>
        </div>
    </div>


    <div className='sec-container'>
    <div className='an-container'>
        <div className='user-experience'>
          <MdPeopleOutline className='icons'/>
          <h1 className='hd1'>Web Design</h1>
          <p className='par'>I am passionate about designing beautiful, intuitive interfaces that help people be more productive. I work with clients to create innovative and effective user interfaces that help them get the most out of their products.</p>
          </div>
        <div className='user-experience'>
        <MdWifi className='icons'/>
          <h1 className='hd1'>Web Dev</h1>
          <p className='par'>I love developing websites , I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects</p>
        </div>
        <div className='user-experience'>
        <MdOutlineContentPasteSearch className='icons'/>
          <h1 className='hd1'>Creative Direction</h1>
          <p className='par'>Leading comunication design, interactive design and concept forward of creative wornihil possimus? Mollitia deserunt magni aperiam, enim atque corrupti. Quidem, doloremque laudantium. Fugit.</p>
        </div>
      </div>
   </div>


   <div className='aboutme-container'>
          <div className='text-container'>
            
                  <img className='img' src={Img} alt="" />
           
            <div className='para-container'>
            <h1 className='text-heading'>About Me</h1>
            <p>Hey, i am John Web designer and and developer from Cebu City. I create costum websites to help business do better online</p>
                <p>I love combining the worlds of logic and creative design to make eye catching, accessible, and user friendly websites and application. </p>
                <p>I'm a passionate web developer with a strong foundation in front-end and back-end technologies. With a keen eye for design and a commitment to creating clean, efficient code, I strive to deliver engaging and user-friendly web experiences.</p>
                <p> dedicated and creative web developer with a passion for transforming ideas into captivating digital experiences. With a strong foundation in both front-end and back-end technologies, I immerse myself in the dynamic world of web development to create seamless, user-centric solutions </p>
               <div className='btaa'>
               <a className='downloadBtn' href='https://drive.google.com/uc?export=download&id=1a9ZF5LbatRIN_DPGAyEhMLj3iEtRmnvW' download="ResumeDen-2.pdf">Download Cv</a>
               </div>
            </div>
          </div>
   </div>






   
  
    </>
  )
}

export default Home
