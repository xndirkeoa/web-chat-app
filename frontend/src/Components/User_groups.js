import React from "react";
import "./Mystyle.css";
import logo from "../Images/live-chat_512px.png";
import { IconButton } from '@mui/material';
import  SearchIcon  from '@mui/icons-material/Search';



function User_groups() {
  return (
    <div className="list-container">
        <div className="ug-header">
        <img
        src={logo}
        style={{height:"2rem",width:"2rem"}}
        alt="logo"
        />
        <p className='ug-title'>Online Users</p>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder="Search"
             className="search-box"/>
         </div>

        <div className='ug-list'>

           <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>
        
            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>


            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
             </div>


            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>


            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>


            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>


            <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </div>
        </div>
    </div>
  )
}

export default User_groups