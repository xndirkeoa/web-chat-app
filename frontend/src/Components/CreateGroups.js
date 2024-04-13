import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { useSelector} from "react-redux";
import {AnimatePresence,motion} from "framer-motion";
function CreateGroups() {
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
       className={"creategroup-container" + (lightTheme ? "": " dark")}>
        <input placeholder='Enter Group Name' className={"search-box" + (lightTheme ? "": " dark")}/>

        <IconButton>
            <DoneOutlineIcon/>
        </IconButton>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroups