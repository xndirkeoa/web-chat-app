import React from 'react';
import logo from '../Images/live-chat_512px.png';



function Welcome() {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="logo"
      className='welcome-logo'/>
      <p> View and Text directly to people present in the chat room </p>
    </div>
  )
}

export default Welcome
