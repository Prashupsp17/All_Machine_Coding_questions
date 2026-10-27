import {useState,useEffect,useRef} from "react";

const Practise = () => {
  const initialLoad = () =>  Array(5).fill("");
  const [inputArr,setInputArr] = useState(initialLoad());
  const refArr= useRef([]);

  const handleOnChange = (value,index) => {
        if(isNaN(value)) return;

        let newValue = value.trim();
        let newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);

        newValue && refArr.current[index+1]?.focus();
  }

  const handleKeyDown = (e,index) => {
    if(e.key === "Backspace" && !e.target.value){
      refArr.current[index-1]?.focus();
    }
  }

  useEffect(() => {
   refArr.current[0]?.focus();
  },[])
 return(
  <div>
    {
      inputArr && inputArr.map((input,index) => {
        return(
          <input 
          ref={(input) => refArr.current[index] = input}
          value={inputArr[index]}
          onChange={(e) => handleOnChange(e.target.value,index)}
          onKeyDown={(e) => handleKeyDown(e,index)}
          style={{textAlign:"center",height:"50px",width:"50px"}}
          />
        )
      })
    }
  </div>
 )
  }
export default Practise; 