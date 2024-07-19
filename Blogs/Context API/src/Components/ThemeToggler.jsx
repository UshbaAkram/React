import { useContext } from "react";
import { ThemeContext } from "./Context";
import { Form } from "./Form";
import Profile from "./Profile";
import { DisplayNotification } from "./DisplayNotification";
export const ThemeToggler = () => {
  const { theme, themeToggel } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff", width:'900px',margin:'auto',padding:'20px',borderRadius:'8px',display:'flex' ,alignItems:'center'
      }}
      className="themeToggler"
    >



        <Form />
        <hr/>
        <Profile/>



      {/* <p>Current Theme is {theme}</p> */}
      <button onClick={themeToggel} style={{ background: theme === "light" ?  "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#333"}}>Toggel Theme</button>
    </div>
  );
};
