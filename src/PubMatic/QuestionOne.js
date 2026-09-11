
import { useState, useEffect } from "react";

const QuestionOne = () => {
  const [value, setValue] = useState("");
  const [doubledValue, setDoubledValue] = useState("");

  const handleNumberDouble = () => {
    setDoubledValue(Math.abs(Number(value) * 2));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleNumberDouble();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [value]);

  return (
    <div>
      <h6>Pubmatic question</h6>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleNumberDouble}>Double</button>

      {doubledValue !== "" && <span>{doubledValue}</span>}
    </div>
  );
};

export default QuestionOne;
// import {useState,useEffect,useMemo} from "react";

// const QuestionOne = () => {
//  const [value,setValue] = useState("");
// //  const [doubledValue,setDoubledValue] = useState("");

//  const doubledValue = useMemo(() => {
//    return setDoubledValue(Math.abs(Number(value)*2));
//  },[]);

//  useEffect(() => {
//    const handleKeyDown = (e) => {
//            if(e.key === "Enter"){
//             setDoubledValue(Math.abs(Number(value)*2));
//            }
//    }

//    document.addEventListener("keydown",handleKeyDown);

//    return () => {
//     document.removeEventListener("keydown",handleKeyDown);
//    }
//  },[value])
//     return(
//         <div>
//             <h6>Pubmatic question</h6>
//             <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
//             <button onClick={handleNumberDouble}>Double</button>
//             {doubledValue && <span>{doubledValue}</span>}
//         </div>
//     )

// }
// export default QuestionOne;