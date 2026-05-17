import React, { memo } from "react";
import {useState,useEffect} from "react";

const TableComponent = ({data,columns}) => {
  console.log(data);
  console.log(columns);
     return(
        <div>
          <table>
            <thead>
              <tr>
                {
                  columns.map((col,i) => {
                    return(
                     <th>{col.header}</th>
                    )
                  })
                }
                
                
              </tr>
            </thead>
            <tbody>
              {
                data.map((row,i) => {
                  return(
                    <tr key={row.id}>
                      {columns.map((col,i) => {
                        return(
                          <td key={col.id}>
                            {row[col.accessor]}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          
        </div>
     )
}
export default memo(TableComponent);