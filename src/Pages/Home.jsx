import React, { useState } from 'react'
import './PagesStyleCss/HomeStyle.css'
import './PagesStyleCss/aboutextension.css'
import './PagesStyleCss/exp.css'
import Img from '../assets/profile.jpg'
import ImgOne from '../assets/download.png'
import ImgTwo from '../assets/imgTwo.png'
import ImgThree from '../assets/imgThree.png'
import { MdPeopleOutline } from 'react-icons/md';
import { MdWifi } from 'react-icons/md';
import { MdOutlineContentPasteSearch } from 'react-icons/md';


const skills = [
  {skill:"Html", percentage: 80, id: 1},
  {skill:"Css", percentage: 70, id: 2},
  {skill:"Javascript", percentage: 70, id: 3},
  {skill:"Bootstrap", percentage: 50, id: 4},
  {skill:"React js", percentage: 50, id: 5},
  {skill:"Php/Mysql", percentage: 50, id: 6},
  {skill:"Node/Express", percentage: 50, id: 7}
]

const experience = [
  {skill:"lorem", id: 8},
  {skill:"lorem", id: 9},
  {skill:"lorem", id: 10},
]




function Home() {
  const [data, setData] = useState(skills)

  const showExpe = () => {
    setData(experience)
  }

  const showSkill = () => {
    setData(skills)
  }

  return (
    <>
    <div className='home-container'>
        <div className='start-introducing'>
                  <div className='Welcome'>
                    <p className='welcome-p'>Welcome to my portfolio</p>
                  </div>
                  <div className='cen'>
                    <h2>Hi, im <span className='name'>John Densing</span></h2>
                    <h2>a Web Developer</h2>
                    <h2>Designer..</h2>
                  </div>
                  <div className='outro'>
                    <p>I have been developing website since 2019. i am profecient in ui design</p>
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
            <h1 className='text-heading'>About Portfolio Minimal</h1>
                <p>Portfolio Minimal is a Gatsby Theme that creates outstanding one-pages portfolio within minutes!</p>
                <p>It has predefined sections for your bio, skills, projects, and contact details. If you are a writer on Medium, you can integrate your latest articles in a distinct section as well. While building the theme, I tried to keep the setup as simple as possible while keeping everything configurable if you like to.</p>
                <p>Using theme composition, you can easily customize the CSS theme to your own preferences - e.g. change colors, fonts, etc.</p>
                <p>Last but not least, it has some cool features you can opt-in to: Dark Mode, Splash Screen, Cookie Banner, and more to find out. </p>
               <button className='downloadBtn'>Download Cv</button>
            </div>
          </div>
   </div>



   
  
    </>
  )
}

export default Home
