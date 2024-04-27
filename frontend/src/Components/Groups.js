import React from "react";
import "./Mystyle.css";
import logo from "../Images/live-chat_512px.png";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";


function Groups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container">
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem" }}
            alt="logo"
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")} >Online Groups</p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")} />
        </div>

        <motion.div className='ug-list'>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>


          <motion.div whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Groups</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Groups;