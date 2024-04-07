import React from 'react';

function MessageSelf() {
    var props2 = {name:"you",message:"this is a sample message"}
  return (
    <div className='self-message-container'>
        <div className='self-text-content'>
            <p className="self-title">  { props2.message }</p>
            <p className="self-stamp" >12:00am</p>
        </div>
        </div>
  );
}

export default MessageSelf;
