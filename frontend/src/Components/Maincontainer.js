// import React,{useState} from 'react';
import './Mystyle.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


function Maincontainer() {
  
  return(
    <div className="main-container">
     <Sidebar />
     <Outlet />
    {/* <Welcome/> */}
    {/* <CreateGroups/> */}
    {/* <Workarea/>  */}
    {/* <User_groups/> */}
    </div>
  );
}
export default Maincontainer;
