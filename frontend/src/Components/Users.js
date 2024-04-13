import React from "react";
import "./Mystyle.css";
import logo from "../Images/live-chat_512px.png";
import { IconButton } from '@mui/material';
import  SearchIcon  from '@mui/icons-material/Search';
import { useSelector} from "react-redux";
import { AnimatePresence,motion } from "framer-motion";



function Users() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
      initial = {{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      exit={{opacity:0,scale:0}}
      transition={{
        ease:"anticipate",
        duration:"0.3",
      }}
       className="list-container">
        <motion.div className={"ug-header" + (lightTheme ? "": " dark")}>
        <img
        src={logo}
        style={{height:"2rem",width:"2rem"}}
        alt="logo"
        />
        <p className={"ug-title" + (lightTheme ? "": " dark")}>Online Users</p>
        </motion.div>
        <motion.div className={"sb-search" + (lightTheme ? "": " dark")}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder="Search"
             className={"search-box" + (lightTheme ? "": " dark")}/>
         </motion.div>

        <motion.div className='ug-list'>

           <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>
        
            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>


            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
             </motion.div>


            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>


            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>


            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>


            <motion.div className={"list-tem" + (lightTheme ? "": " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test user</p>
            </motion.div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  ); 
}
export default Users