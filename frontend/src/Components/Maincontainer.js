import React from 'react'
import './Mystyle.css';
import Sidebar from './Sidebar';
import Workarea  from './Workarea';

function Maincontainer() {
  return (
    <div className='main-container'>
     <Sidebar />
     <Workarea /> 
    </div>
  );
}

export default Maincontainer
