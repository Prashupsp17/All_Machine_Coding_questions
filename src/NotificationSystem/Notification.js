import React from "react";
import {useState,useEffect} from "react";
import { AiOutlineCheckCircle,AiOutlineInfoCircle,AiOutlineWarning,AiOutlineCloseCircle } from "react-icons/ai";
import './Notification.css';

const icons = {
    success:<AiOutlineCheckCircle />,
    info:<AiOutlineInfoCircle />,
    warning:<AiOutlineWarning />, 
    error:<AiOutlineCloseCircle  />

}

const Notification = ({type="info",message, onClose}) => {

    return(
        <div className={`notification ${type}`}>
             {icons[type]}
           {message} 
            {/* {onClose}   */}
        </div>
    )
}
export default Notification;