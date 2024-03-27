import React from 'react';
import { theme, ThemeProvider } from "@chakra-ui/core";
import Navbar from './Components/Navbar'; 
import Maincontainer from './Components/Maincontainer'; 

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <>
          <Maincontainer />
          <Navbar />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
