import { useContext , useState } from "react";
import { userContext } from "./ContextForm";
import { NotificationContext } from "./Context";

export const Form = () => {
  const { user, updateUser } = useContext(userContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    updateUser({ username, password });
    console.log(username)
  }
//Notification
const {notification , updateNotification}=useContext(NotificationContext)
const [messege, setMessege] = useState("");
function handelNotification() {
    updateNotification(messege)
    console.log(messege)
    setMessege('')
}

  return (
    <div>
              <h2>Welcome {username}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br/><br/>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br/>
      <input
        type="text"
        value={messege}
        onChange={(e) => setMessege(e.target.value)}
        placeholder="Notifaication"
      />
       <button onClick={handelNotification} >Notify</button>
      <br/>

      <button onClick={handelSubmit} >Login</button>
     
    </div>
  );
};
