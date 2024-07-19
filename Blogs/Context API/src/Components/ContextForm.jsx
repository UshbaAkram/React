import React, { createContext, useState } from "react";
export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Ushba",
    password: "0000",
  });
  function updateUser(newUser) {
    setUser(...user, newUser);
    console.log(newUser);
  }

  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
