import { useContext } from "react";
import { userContext } from "./ContextForm";

const Profile = () => {
    const {user}= useContext(userContext)
    return (  
        <div>
            <h2>Profile of {user.username}</h2>
            <p>
                  name: {user.username}</p>
                  <p>
            password: {user.password}
            </p>
          
        </div>
    );
}
 
export default Profile;