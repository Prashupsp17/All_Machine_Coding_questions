import {useState,useEffect} from "react";

const Practise = () => {

  const [formData,setFormData] = useState({
    name:"",
    dob:"",
    medicialHistory:""
  })
  console.log(formData);
  const [errors,setErrors] = useState({});
  console.log(errors);
  const [list,setList] = useState([]);
  console.log(list);

  const handleChange = (e) => { 
       const {name,value} = e.target;

       setFormData((prev) => ({
        ...prev,
        [name]:value
       }))
       setErrors((prev) => ({
        ...prev,
        [name] : ""
       }));
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   const newErrors = {}
   if(!formData.name || formData.name.trim() === ""){
           newErrors.name = "Enter the name";
   }else if(!formData.dob){
       newErrors.dob = "Enter the date ";
   }else if(new Date(formData.dob) > new Date()){
    newErrors.dob = "DOB cannot be future date";
   }else if(!formData.medicialHistory || formData.medicialHistory.trim() === ""){
    newErrors.medicialHistory = "Enter the medicial History";
   }

   setErrors(newErrors);

   const obj = {
    id : Date.now(),
    formData
   }
   if(Object.keys(newErrors).length === 0){
      setList((prev) => [...prev,obj]);
   }
  }
  return(
    <div>
    <h6>Practise</h6>
    <form onSubmit={handleSubmit}>
      <input placeholder="name" type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
      <input placeholder="dob"  type="date" name="dob" value={formData.dob} onChange={handleChange}  />
      {errors.dob && <span style={{color:"red"}}>{errors.dob}</span>}
      <textarea placeholder="medicial history"   type="text" name="medicialHistory" value={formData.medicialHistory} onChange={handleChange} />
      {errors.medicialHistory && <span style={{color:"red"}}>{errors.medicialHistory}</span>}
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
export default Practise;