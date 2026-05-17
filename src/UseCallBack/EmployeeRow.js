import React from "react";
import {useState,useEffect } from "react";

const EmployeeRow = ({data,handleDelete,handleStatus}) => {
    return(
        <div><h6>EMployee ROw</h6>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",gap:"10px",alignItems:'center'}}>
            {
                data && 
                data.map((user,i) => {
                    return(
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                          <span>{user.firstName}</span>
                          <span>{user.id}</span>
                          <span>{user.address.city}</span>
                          <span>{user.hair.color}</span>
                          <button onClick={() => handleDelete(user.id)}>Delete</button>
                          <button onClick={() => handleStatus(user.id)}>{user.isActive === true ? "active" : "inActive"}</button>
                        </div>
                    )
                })
            }
            
        </div>
        </div>
    )

}
export default React.memo(EmployeeRow);