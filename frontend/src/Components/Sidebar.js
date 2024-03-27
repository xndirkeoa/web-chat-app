import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibilityIcon from '@mui/icons-material/Accessibility';


function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='header'>
        <AccountCircleIcon/> 
        <AccessibilityIcon/>
      </div>
      <div className='search'>search</div>
      <div className='conversation'>conversation</div>
    </div>
  );
}

export default Sidebar
