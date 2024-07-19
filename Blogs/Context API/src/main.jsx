import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./Components/ContextForm.jsx";
import {
  AuthenticationProvider,
  NotificationProvider,
  ThemeProvider,
} from "./Components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserContextProvider>
      <NotificationProvider>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </NotificationProvider>
    </UserContextProvider>
  </ThemeProvider>
);
