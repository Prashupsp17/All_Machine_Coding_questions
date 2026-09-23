import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Form = () => {
     const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name:'',
        dob:"",
        medicialHistory:"",
        medicialDescription:""
    })
    console.log(formData);
    const [errors,setError] = useState({});
    console.log(errors);
    const [list,setList] = useState([]);

    const handleChange = (e) => {
   const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if(!formData.name || formData.name.trim() === ""){
            newErrors.name = "Enter the name";
        }else if(!formData.dob){
            newErrors.dob = "Enter the date ";
        }else if(new Date(formData.dob) > new Date()){
         newErrors.dob = "DOB cannot be future date";
        }else if(!formData.medicialHistory || formData.medicialHistory.trim() === ""){
            newErrors.medicialHistory = "Please enter Medicial History";
        }else if(!formData.medicialDescription || formData.medicialDescription === "" ){
            newErrors.medicialDescription = "Please enter medicial description";
        }

        setError(newErrors);
        const obj = {
            id : Date.now(),
            formData
           }
           if(Object.keys(newErrors).length === 0){
              setList((prev) => [...prev,obj]);
           }

        if(Object.keys(newErrors).length > 0){
            navigate(`/error`,{
                state:{
                    error:newErrors,
                }
            })
        }else{
            navigate('/welcome');
        }
    }
 return(
    <div>
        <h6>LTM Form</h6>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => handleChange(e)} value={formData.name} type="text" name="name" placeholder="Enter Name" /><br></br>
            {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
            <input onChange={(e) => handleChange(e)} value={formData.dob}  type="date"  name='dob' /><br></br>
            {errors.dob && <span style={{color:"red"}}>{errors.dob}</span>}
            <textarea onChange={(e) => handleChange(e)}  value={formData.medicialHistory}  placeholder="enter medicial history" name="medicialHistory"/><br></br>
            {errors.medicialHistory && <span style={{color:"red"}}>{errors.medicialHistory}</span>}
            <input  onChange={(e) => handleChange(e)} value={formData.medicialDescription}  placeholder="medicines required" name="medicialDescription"  /><br></br>
            {errors.medicialDescription && <span style={{color:"red"}}>{errors.medicialDescription}</span>}
            
            <button type="submit">Submit</button>
        </form>

    </div>
 )
}

export default Form;