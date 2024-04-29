import React from 'react';
import "./App.css";
import Maincontainer from './Components/Maincontainer';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workarea from './Components/Workarea';
import CreateGroups from './Components/CreateGroups';
import Welcome from './Components/Welcome';
import Users from './Components/Users';
import Groups from './Components/Groups';

function App() {
  return (
    <div className="App">
      {/* <Maincontainer /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<Maincontainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat/:id" element={<Workarea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="creategroups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
