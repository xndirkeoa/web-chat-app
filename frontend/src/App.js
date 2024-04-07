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
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/app" element={<Maincontainer />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/chat" element={<Workarea />} />
          <Route path="/users" element={<Users />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/create-groups" element={<CreateGroups />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
