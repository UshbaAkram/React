import { useState } from "react";

import "./App.css";
import { ThemeProvider } from "./Components/Context";
import { ThemeToggler } from "./Components/ThemeToggler";
import { UserContextProvider } from "./Components/ContextForm"
import { Form } from "./Components/Form";
import Profile from "./Components/Profile";
import { DisplayNotification } from "./Components/DisplayNotification";
function App() {

  return (<>
    
      <ThemeToggler />
      <DisplayNotification />
    
     {/* <Form />   */}
  {/* <Profile /> */}
    </>
  
  );
}

export default App;
