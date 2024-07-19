import React, { createContext } from "react";
import { useState } from "react";
export const ThemeContext = createContext();
// Notification
export const NotificationContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  function themeToggel() {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, themeToggel }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Notification
export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState([]);
    function updateNotification(messege) {
        setNotification([...notification,messege])
        
    }
       return (
      <NotificationContext.Provider value={{ notification, updateNotification}}>
        {children}
      </NotificationContext.Provider>
    );
  };

  //Authentication 
export const AuthenticationContext = createContext();
export const AuthenticationProvider =({children})=>{
  const [auth, setAuth] = useState({
    isAuthenricated:false,
    user:null
  });
  function login(user) {
  setAuth( { isAuthenricated:true,
    user: user
    })
  }
  function logout() {
    setAuth( { isAuthenricated:false,
      user: null
      })
    }
  
  return(
    <AuthenticationContext.Provider value={{auth,login, logout}}>
      {children}
    </AuthenticationContext.Provider>
  )
}

