import React from 'react'
import './PagesStyleCss/Contact.css'
import ok from '../assets/ok.png'

function SendingAlert() {
  return (
    <div className='sending'>
       <p className='sendingp'>Message sent! <img className='ok' src={ok} /></p>
    </div>
  )
}

export default SendingAlert
