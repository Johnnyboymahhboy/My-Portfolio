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
                <p>Portfolio Minimal is a Gatsby Theme that creates outstanding one-pages portfolio within minutes!</p>
                <p>It has predefined sections for your bio, skills, projects, and contact details. If you are a writer on Medium, you can integrate your latest articles in a distinct section as well. While building the theme, I tried to keep the setup as simple as possible while keeping everything configurable if you like to.</p>
                <p>Using theme composition, you can easily customize the CSS theme to your own preferences - e.g. change colors, fonts, etc.</p>
                <p>Last but not least, it has some cool features you can opt-in to: Dark Mode, Splash Screen, Cookie Banner, and more to find out. </p>
               <button className='downloadBtn1'>Download Cv</button>
            </div>
          </div>
        </div>
        </>
  )
}

export default About
