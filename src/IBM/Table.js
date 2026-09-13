import {useState,useEffect} from "react";

const Table = ({columns,data,lastPage,firstPage}) => {
  return(
    <div style={{width:"100%"}}>table
           <table style={{width:"100%"}}>
            <thead>
                {
                   columns.map((col) => {
                    return(
                     <th key={col.id}>{col.header}</th>
                    )
                   }) 
                }
            
            </thead>
            <tbody>
                {
                   data.slice(firstPage,lastPage).map((row,i) => {
                    return(
                        <tr key={row.id}>
                        {
                            columns.map((col,j) => {
                                return(
                                    <td>{row[col.accessor]}</td>
                                )
                            })
                        }
                        </tr>
                    )
                   })
                }
               
            </tbody>
          
           </table>
    </div>
 
  )
}
export default Table;