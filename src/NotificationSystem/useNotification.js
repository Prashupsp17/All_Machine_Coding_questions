import React from "react";
import {useState,useEffect} from "react";
import Notification from './Notification';

const useNotification = (position="top-right") => {
    const [notification,setNotification] = useState(null);
   let timer ;
    const triggerNotification = (notificationProps) => {

        console.log(notificationProps.duration);
         clearTimeout(timer);
        setNotification(notificationProps);
    
        timer  = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    }

    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <Notification  {...notification}/>
        </div>
    ) : null

    return{
        NotificationComponent,
        triggerNotification
    }

};
export default useNotification;