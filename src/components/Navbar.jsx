import React, { useEffect } from 'react'
import  './Navbars.css'
import { MdMenu } from 'react-icons/md';

import { MdClose } from 'react-icons/md'
import { useState} from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  const [isNavbarVisible, setisNavbarVisible] = useState(false)
  const handleNavbar = () => {
    setisNavbarVisible(true)
  } 
   
  const handleClose = () => {
    setisNavbarVisible(false)
  }

  const handleWindowResize = () => {
    if (window.innerWidth > 1000) {
      setisNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <nav className='Navbar'>
      <div className='LogoMenu'>
        <div className='Logo'> 
            <h2>J<span>ohn.</span></h2>
        </div>
        <div className='bt'>
          <button className='menuBtn'>{isNavbarVisible ? <MdClose onClick={handleClose}/> : <MdMenu onClick={handleNavbar} /> }</button>
        </div>
        </div>
            <ul className={`navbars ${isNavbarVisible ? 'visible' : 'hidden'}`}>
              <li><Link to='/My-Profile/' className='my-link'>Home </Link></li>
              <li><Link to='/My-Profile/about' className='my-link'>About </Link></li>
              <li><Link to='/My-Profile/skills' className='my-link'>Skills </Link></li>
              <li><Link to='/My-Profile/contact' className='my-link'>Contacts </Link></li>
              <li className='s'><span>Start</span> </li>
            </ul>
    </nav>
  )
}

export default Navbar
