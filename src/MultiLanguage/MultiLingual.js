import React from "react";
import {useState,useEffect} from "react";
const MultiLingual = () => {
    const [selectLanguage,setSelectedLanguage] = useState("");
    console.log(selectLanguage);

    const language = {
        english: {
            heading: "Multi Language",
            greeting: "Hello Namaste",
            question: "How are you?"
        },
    
        hindi: {
            heading: "बहुभाषी",
            greeting: "नमस्ते",
            question: "आप कैसे हैं?"
        },
    
        marathi: {
            heading: "बहुभाषिक",
            greeting: "नमस्कार",
            question: "तू कसा आहेस?"
        }
    };
    return(
        <div>
            <h3><b>Multi Language</b></h3>
             <select value={selectLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
             <option value="">
                 Select Language
               </option>
                <option value="english">English</option>
                 <option value="hindi">Hindi</option>
                 <option value="marathi">Marathi</option>
                
             </select>
             <div style={{marginTop:"50px"}}>
             <div>{selectLanguage && language[selectLanguage].heading}</div>
             <div>{selectLanguage && language[selectLanguage].greeting} </div>
             <div>{selectLanguage && language[selectLanguage].question}</div>
             </div>
            
        </div>
        
    )

}

export default MultiLingual;