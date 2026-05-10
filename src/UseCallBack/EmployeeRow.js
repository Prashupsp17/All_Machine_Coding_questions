import React from "react";
import {useState,useEffect } from "react";

const EmployeeRow = ({data,handleDelete}) => {
    return(
        <div><h6>EMployee ROw</h6>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",gap:"10px",alignItems:'center'}}>
            {
                data && 
                data.map((user,i) => {
                    return(
                        <div>
                          <span>{user.firstName}</span>
                          <span>{user.id}</span>
                          <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    )
                })
            }
            
        </div>
        </div>
    )

}
export default React.memo(EmployeeRow);