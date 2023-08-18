import React from 'react'
import JsIcon from '../assets/programmingSkills/Javascript.png'
import htmlIcon from '../assets/programmingSkills/htmlICon.png'
import Css from '../assets/programmingSkills/Css.png'
import Php from '../assets/programmingSkills/Php.png'
import Nodejs from '../assets/programmingSkills/Nodejs.png'
import Express from '../assets/programmingSkills/Express.png'
import Reactjs from '../assets/programmingSkills/React.png'
import Mysql from '../assets/programmingSkills/Mysql.png'
import Bootstrap from '../assets/programmingSkills/Bootstrap.png'
import './PagesStyleCss/skills.css'
function Skills() {
  return (
    <div className='skills-container'>
      <div className='header1'>
          <h1 className='head1'>Front End</h1>
      </div>
      <div className="font-end-container">
          <div className='con'>
            <img className='im' src={htmlIcon} alt="" />
            <h3 className='head3'>Html</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius voluptate in </p>
          </div>
          <div className='con'>
         
            <img className='im' src={JsIcon} alt="" />
            <h3 className='head3'>Javascript</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius voluptate in </p>
          </div>
          <div className='con'>
 
            <img className='im' src={Css} alt="" />
            <h3 className='head3'>Css</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius voluptate in </p>
          </div>
          <div className='con'>
    
            <img className='im' src={Bootstrap} alt="" />
            <h3 className='head3'>Bootstrap</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius voluptate in </p>
          </div>
          <div className='con'>
      
            <img className='im' src={Reactjs} alt="" />
            <h3 className='head3'>React js</h3>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius voluptate in </p>
          </div>
      </div>


      <div className='header2'>
          <h1 className='head2'>Back end</h1>
      </div>
      <div className="back-end-container">
          <div className='con'>
            <img className='im' src={Php} alt="" />
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius </p>
          </div>
          <div className='con'>
            <img className='im' src={Mysql} alt="" />
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius </p>
          </div>
          <div className='con'>
            <img className='im' src={Nodejs} alt="" />
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius </p>
          </div>
          <div className='con'>
            <img className='im' src={Express} alt="" /><p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis similique voluptatum quo, animi fugiat eius </p>
          </div>
      </div>
    </div>
  )
}

export default Skills
