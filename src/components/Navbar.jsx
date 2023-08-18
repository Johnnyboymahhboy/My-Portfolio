import React, { useEffect } from 'react'
import  './Navbars.css'
import { MdMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { MdClose } from 'react-icons/md'
import { useState} from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  const location = useLocation()
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
    setisNavbarVisible(false)
  }, [location])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <nav className='Navbar'>
      <div className='LogoMenu'>
        <div className='Logo'> <Link to='/My-Portfolio/'><h2>J<span>ohn.</span></h2></Link>
            
        </div>
        <div className='bt'>
          <button className='menuBtn'>{isNavbarVisible ? <MdClose onClick={handleClose}/> : <MdMenu onClick={handleNavbar} /> }</button>
        </div>
        </div>
            <ul className={`navbars ${isNavbarVisible ? 'visible' : 'hidden'}`}>
              <li><Link to='/My-Portfolio/' className='my-link'>Home </Link></li>
              <li><Link to='/My-Portfolio/about' className='my-link'>About </Link></li>
              <li><Link to='/My-Portfolio/skills' className='my-link'>Skills </Link></li>
              <li><Link to='/My-Portfolio/contact' className='my-link'>Contacts </Link></li>
              <li className='s'><span>Start</span> </li>
            </ul>
    </nav>
  )
}

export default Navbar
