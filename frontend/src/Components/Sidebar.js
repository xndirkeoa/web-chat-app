
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from "./Conversationsitem";
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import { light } from '@mui/material/styles/createPalette';
 import ExitToAppIcon from '@mui/icons-material/ExitToApp';



function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  


  const [conversations, setConversations] = useState(
    [{
        name: "Test#1",
        lastMessage: "Last Message #1",
        timeStamp: "today",
      },
      {
        name:"Test#2",
        lastMessage:"Last Message #2",
        timeStamp:"today",
      },
      {
        name:"Test#3",
        lastMessage:"Last Message #3",
        timeStamp:"today",
      },
  ]);

  return (
    <div className='sidebar-container'>
      <div className={"header" + (lightTheme ? "": " dark")}>
        <div className="other-icons">
        <IconButton>
            <AccountCircleIcon className={"icon" + (lightTheme ? "": " dark")} /> 
        </IconButton>

        

        <IconButton onClick={()=>{navigate("Users")}}>

          <PersonAddIcon className={"icon" + (lightTheme ? "": " dark")} /> 
        </IconButton>
        <IconButton onClick={()=>{navigate("Groups")}}>
          <GroupAddIcon className={"icon" + (lightTheme ? "": " dark")}/> 
        </IconButton>
        <IconButton onClick={()=>{navigate("creategroups")}}>
          <AddCircleIcon className={"icon" + (lightTheme ? "": " dark")}/> 
        </IconButton>

        <IconButton onClick={() => {dispatch(toggleTheme())}}>
          {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "": " dark")}/>}
          {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "": " dark")}/>}
        </IconButton>
        <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
        </div>

      <div className={"search" + (lightTheme ? "": " dark")}>

        <IconButton className={"icon" + (lightTheme ? "": "dark")}>
          <SearchIcon/>
        </IconButton>
      <input placeholder="search" className={"search-box" + (lightTheme ? "": " dark")}/>
      </div>   
      <div className={"sb-conversations" + (lightTheme ? "": " dark")}>
      {conversations.map((conversation) =>(< ConversationsItem props = {conversation} key={conversation.name} />
      ))}
      </div>
      </div>
  );
}

export default Sidebar;
