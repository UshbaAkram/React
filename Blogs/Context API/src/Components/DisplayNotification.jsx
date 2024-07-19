import { useContext } from "react";
import { NotificationContext } from "./Context";

export const DisplayNotification = () => {
   const{notification}= useContext(NotificationContext)
   console.log(notification)
    return ( <div>
        <h2>Noti</h2>
        <ul>
        {notification.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
        </ul>
    </div>);
}