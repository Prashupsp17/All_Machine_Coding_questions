import React from "react";
import {useState,useEffect} from 'react';
const ChipsInput  = () => {
    const [inputValue,setInputValue] = useState();
    const [chips,setChips] = useState([]);
    console.log(chips);

    const handleKeyDown = (e) => {
        if(!inputValue ||  inputValue.trim() == "") return;
        
        if(e.key === "Enter"){
            setChips((prev) => [...prev,inputValue]);
            setInputValue("");
        }
          
    }

    const handleDeleteChip = (index) => {
        const filterData = chips.filter((item,i) => i !== index);
        setChips(filterData);

    }

    return(
        <div>
        <h3>Chips Input</h3>
        <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e) }
         />
        <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>
            {
                chips && chips.map((chip,index) => {
                    return(
                        <div style={{backgroundColor:"grey" ,width:"80px",padding:"10px"}}>{chip} <button onClick={() => handleDeleteChip(index)}>X</button></div>
                    )
                })
}
           
        </div>
        </div>
    )

}
export default ChipsInput;