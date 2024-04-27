import React, { createContext, useState } from 'react';
import './Mystyle.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const myContext = createContext();
function Maincontainer() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  return (
    <div
      className={"main-container" + (lightTheme ? "" : "dark")}>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      {/* <Workarea/>  */}
      {/* <User_groups/> */}
    </div>
  );
}
export default Maincontainer;
