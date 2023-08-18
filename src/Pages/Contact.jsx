import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './PagesStyleCss/Contact.css'
import SendingAlert from './SendingAlert';
import down from '../assets/down.png'

const Contact = () => {
  const form = useRef();
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [isMessageSent, setIsMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ozx9ana', 'template_z191s3o', form.current, 'F_pAsBtMEaQpdZylD')
      .then((result) => {
          console.log(result.text);
          setNameInput('')
          setEmailInput('')
          setMessageInput('')
          setIsMessageSent(true)
            if(!nameInput && !emailInput && !messageInput){
              setIsMessageSent(false)
              return;
            }


            setTimeout(() => {
              setIsMessageSent(false)
            }, 1000);

      
  
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form-container'>
      {isMessageSent ? <SendingAlert/> : ""}
    <form className='forms' ref={form} onSubmit={sendEmail}>
    <h1 className='hea'>Write me a message <img className='down' src={down} /> </h1>
      <label className='lab'>Your Name:</label>
      <input
       className='inputs'
       type="text" 
       name="to_name"
       value={nameInput}
       onChange={(e) => setNameInput(e.target.value)}
       />
      <label className='lab'>Your Email:</label>
      <input 
      className='inputs' 
      type="email" 
      name="from_name"
      value={emailInput}
      onChange={(e) => setEmailInput(e.target.value)}
      />
      <label className='lab'>Message:</label>
      <textarea 
      className='inputs'  
      name="message"
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
      />
      <div className='ge'>
      <input className='bts' type="submit" value="Send" />
      </div>
    </form>
    </div>
  );
};


export default Contact