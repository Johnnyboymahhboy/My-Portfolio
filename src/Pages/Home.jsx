import React, { useState } from 'react'
import './PagesStyleCss/HomeStyle.css'
import './PagesStyleCss/aboutextension.css'
import './PagesStyleCss/exp.css'
import Img from '../assets/profile.jpg'

import { MdPeopleOutline } from 'react-icons/md';
import { MdWifi } from 'react-icons/md';
import { MdOutlineContentPasteSearch } from 'react-icons/md';



function Home() {
  

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
                    <button className='btnHire'>Hire me</button>
                    <button className='btnContact'>Contact me</button>
                  </div>
        </div>
    </div>


    <div className='sec-container'>
    <div className='an-container'>
        <div className='user-experience'>
          <MdPeopleOutline className='icons'/>
          <h1 className='hd1'>User Experience</h1>
          <p className='par'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nisi ratione omnis deleniti optio ipsam, officiis sint nihil possimus? Mollitia deserunt magni aperiam, enim atque corrupti. Quidem, doloremque laudantium. Fugit.</p>
          </div>
        <div className='user-experience'>
        <MdWifi className='icons'/>
          <h1 className='hd1'>Identity Design</h1>
          <p className='par'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nisi ratione omnis deleniti optio ipsam, officiis sint nihil possimus? Mollitia deserunt magni aperiam, enim atque corrupti. Quidem, doloremque laudantium. Fugit.</p>
        </div>
        <div className='user-experience'>
        <MdOutlineContentPasteSearch className='icons'/>
          <h1 className='hd1'>Content Strategy</h1>
          <p className='par'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nisi ratione omnis deleniti optio ipsam, officiis sint nihil possimus? Mollitia deserunt magni aperiam, enim atque corrupti. Quidem, doloremque laudantium. Fugit.</p>
        </div>
      </div>
   </div>


   <div className='aboutme-container'>
          <div className='text-container'>
            
                  <img className='img' src={Img} alt="" />
           
            <div className='para-container'>
            <h1 className='text-heading'>About Portfolio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex impedit incidunt alias esse tempore</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet ut quam alias veritatis officia velit eligendi animi cupiditate maxime accusamus voluptatibus incidunt corrupti aliquid iusto, deleniti voluptates dicta magni!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, nisi autem unde quibusdam nesciunt libero consectetur cumque reprehenderit quasi at nobis! Doloribus sed necessitatibus amet modi eveniet doloremque ipsa esse.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae facere nemo libero dicta consequuntur quia deleniti possimus officia accusamus odit itaque debitis sunt, vero blanditiis. Ipsam repudiandae maxime voluptates aliquam. </p>
               <button className='downloadBtn'>Download Cv</button>
            </div>
          </div>
   </div>



   
  
    </>
  )
}

export default Home
