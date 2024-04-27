// import React, { useContext, useEffect, useState } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { IconButton } from '@mui/material';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleTheme } from '../Features/themeSlice';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import axios from "axios";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./Maincontainer";

// function Sidebar() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   const [refresh, setRefresh] = useContext(myContext);
//   const [conversations, setConversations] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const nav = useNavigate();



//   const user = userData.data;

//   useEffect(() => {
//     if (!userData) {
//       console.log("User not authenticated");
//       nav("/");
//       return null; // Return null to avoid rendering further
//     }
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };
//     axios.get("http://localhost:5000/chat/", config)
//       .then((response) => {
//         console.log("Response Data Type:", typeof response.data);
//         console.log("Response Data:", response.data);
//         setConversations(response.data);
//         if (Array.isArray(response.data) && response.data.length > 0) {
//           setConversations(response.data);
//         } else {
//           console.log("No conversations data received or empty array.");
//           setConversations([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching conversations:", error);
//         // Handle error condition
//       });
//   }, [refresh]);

//   return (
//     <div className='sidebar-container'>
//       <div className={"sb-header" + (lightTheme ? "" : " dark")}>
//         <div className="other-icons">
//           <IconButton onClick={() => { nav("/app/welcome"); }}>
//             <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => { navigate("users"); }}>
//             <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => { navigate("Groups"); }}>
//             <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => { navigate("creategroups"); }}>
//             <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => { dispatch(toggleTheme()); }}>
//             {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />}
//             {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
//           </IconButton>
//           <IconButton onClick={() => { localStorage.removeItem("userData"); nav("/"); }}>
//             <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//         </div>
//       </div>

//       <div className={"search" + (lightTheme ? "" : " dark")}>
//         <IconButton className={"icon" + (lightTheme ? "" : "dark")}>
//           <SearchIcon />
//         </IconButton>
//         <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
//       </div>
//       console.log("Conversations type:", typeof conversations);
//       console.log("Conversations:", conversations);
//       <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
//         {conversations.map((conversation, index) => {
//           if (conversation.users.length === 1) {
//             return (
//               <div key={index}></div>
//             );
//           }
//           if (conversation.latestMessage === undefined) {
//             console.log("No latest message with ", conversation.users[1]);
//             return (
//               <div
//                 key={index}
//                 onClick={() => {
//                   console.log("Refresh fired from sidebar");
//                   dispatch(refreshSidebarFun());
//                   setRefresh(!refresh);
//                 }}
//               >
//                 <div
//                   key={index}
//                   className="conversation-container"
//                   onClick={() => {
//                     navigate(
//                       "chat/" + conversation._id + "&" + conversation.users[1].name
//                     );
//                   }}
//                 >
//                   <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                     {conversation.users[1].name[0]}
//                   </p>
//                   <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                     {conversation.users[1].name}
//                   </p>
//                   <p className="con-lastMessage">
//                     No previous messages, click here to start a new chat
//                   </p>
//                 </div>
//               </div>
//             );
//           } else {
//             return (
//               <div
//                 key={index}
//                 className="conversation-container"
//                 onClick={() => {
//                   navigate(
//                     "chat/" + conversation._id + "&" + conversation.users[1].name
//                   );
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                   {conversation.users[1].name[0]}
//                 </p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {conversation.users[1].name}
//                 </p>
//                 <p className="con-lastMessage">
//                   {conversation.latestMessage.content}
//                 </p>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
















import React, { useContext, useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from "axios";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./Maincontainer";
import { response } from 'express';

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useContext(myContext);
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  if (!userData) {
    console.log("User not authenticated");
    nav("/");
  }
  const user = userData.data;
  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios.get("http://localhost:5000/chat/", config).then((response) => {
      console.log("Response Data Type :", typeof response.data);
      console.log("Response Data:", response.data);
    });
  }, [refresh]);

  return (
    <div className='sidebar-container'>
      {/* Header section */}
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton onClick={() => { nav("/app/welcome"); }}>
            <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => { navigate("users"); }}>
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => { navigate("Groups"); }}>
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => { navigate("creategroups"); }}>
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => { dispatch(toggleTheme()); }}>
            {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />}
            {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
          </IconButton>
          <IconButton onClick={() => { localStorage.removeItem("userData"); nav("/"); }}>
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>

      {/* Search section */}
      <div className={"search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : "dark")}>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
      </div>

      {/* Conversations section */}
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          if (conversation.users.length === 1) {
            return (
              <div key={index}></div>
            );
          }
          if (conversation.latestMessage === undefined) {
            console.log("No latest message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  dispatch(refreshSidebarFun());
                  setRefresh(!refresh);
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" + conversation._id + "&" + conversation.users[1].name
                    );
                  }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name}
                  </p>
                  <p className="con-lastMessage">
                    No previous messages, click here to start a new chat
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" + conversation._id + "&" + conversation.users[1].name
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name}
                </p>
                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
