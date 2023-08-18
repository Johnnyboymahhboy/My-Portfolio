import React from 'react'
import './Footer.css'
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className='footer'>
        <h1 className='footer-text'>John Densing</h1>
        <p className='footer-par'>&copy; 2023 Johnnyboy. All rights reserved.</p>
      
        <div className='soc-media'>
          <a href="https://www.facebook.com/Johnyoyong1" className='soc'><MdFacebook className='acon'/></a>
          <a href="https://www.instagram.com/johnny_boyyyyyyyyyyyyyy/" className='soc'><AiFillInstagram className='acon' /></a>
          <a href="https://twitter.com/johndensin87961" className='soc'><AiFillTwitterCircle className='acon' /></a>
          <a href="" className='soc'><AiFillGoogleCircle className='acon' /></a>
        </div>
      </div>
    </>
  )
}

export default Footer
