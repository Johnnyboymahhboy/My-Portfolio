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
        <p className='footer-par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui a ab aliquam. Animi quo itaque ratione eveniet ea, reiciendis nesciunt fugit laboriosam beatae quod? Praesentium ipsam optio autem delectus.</p>
        <div className='soc-media'>
            <MdFacebook className='soc'/>
            <AiFillInstagram className='soc'/>
            <AiFillTwitterCircle className='soc'/>
            <AiFillGoogleCircle className='soc'/>
        </div>
      </div>
    </>
  )
}

export default Footer
