import {useState,useEffect} from "react";

const Practise = () => {

  const [formData,setFormData] = useState({
    name:"",
    dob:"",
    address:"",
    email:""
  })
  // console.log(formData);
  const [errors,setErrors] = useState({});
  // console.log(errors);
  const [formDataList,setFormDataList] = useState([]);
console.log(formDataList);
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if(!formData.name || formData.name.trim() === ""){
      errors.name = "Please enter your name";
    }else if(!formData.dob){
      errors.dob = "Please enter DOb";
    }else if(new Date(formData.dob) > new Date()){
        errors.dob = "Please enter valid dob it cant be a future date";
    }
  setErrors(errors);
  if(Object.keys(errors).length > 0){
     return;
  }
  const obj = {
    id:Date.now(),
    formData
  }
   setFormDataList((prev) => [...prev,obj] );
   setFormData({
    name:"",
    dob:"",
    address:"",
    email:""
   })
  }

  const handleChange = (e) => {
   const {name,value} = e.target;
    
   setFormData((prev) => ({
        ...prev,
        [name]:value
   }))
   setErrors((prev) => ({
       ...prev,
       [name]:""
   }))
  }



  return(

    <div>
    <h6>Practise</h6>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Name" value={formData.name} name="name"  onChange={(e) => handleChange(e)}  />
      {
        errors.name && <div style={{color:"red"}}>{errors.name}</div>
      }
      <input type="date" placeholder="Enter DOB"  value={formData.dob} name="dob" onChange={(e) => handleChange(e)} />
      {
        errors.dob && <div style={{color:"red"}}>{errors.dob}</div>
      }
      <input type="text"  placeholder="Enter Address"  value={formData.address} name="address" onChange={(e) => handleChange(e)} />
      <input type="text" placeholder="Enter email"  value={formData.email}  name="email" onChange={(e) => handleChange(e)} />
      <button type="submit">Submit</button>
    </form>
   
    </div>
  )
  }
export default Practise;