import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

const Error = () => {

    const location = useLocation();
    console.log(location);
    console.log(location.state.error.name);
 return(
    <h6>
         {location.state.error.name && <span>{location.state.error.name}</span>}
         {location.state.error.dob && <span>{location.state.error.dob}</span>}
         {location.state.error.medicialHistory && <span>{location.state.error.medicialHistory}</span>}
        {location.state.error.medicialDescription && <span>{location.state.error.medicialDescription}</span>}
     </h6>
 )
}
export default Error;