// import React from 'react';
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";




// function Welcome() {
//   const lightTheme = useSelector((state) => state.themeKey);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log(userData);
//   const nav = useNavigate();
//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }
//   return (
//     <div className={"welcome-container" + (lightTheme ? "" : "dark")}>
//       <motion.img
//         drag
//         whileTap={{ scale: 1.05, rotate: 360 }}
//         src='logo'
//         alt='logo'
//         className='welcome-logo' />
//       <b> Hi , {userData.data.name}</b>
//       <p> View and Text directly to people present in the chat room </p>
//     </div>
//   );
// }

// export default Welcome





import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  // Redirect to home page if user data doesn't exist
  useEffect(() => {
    if (!userData) {
      console.log("User not Authenticated");
      nav("/");
    }
  }, [userData, nav]);

  // Render the component content if user data exists
  if (!userData) {
    return null; // Return null or a loading indicator if redirection is in progress
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : "dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src='logo'
        alt='logo'
        className='welcome-logo' />
      <b> Hi, {userData.data.name || 'User'}</b> {/* Handle undefined name */}
      <p> View and Text directly to people present in the chat room </p>
    </div>
  );
}

export default Welcome;
