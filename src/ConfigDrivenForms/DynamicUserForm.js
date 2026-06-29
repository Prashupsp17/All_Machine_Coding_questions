import React from "react";
import {useState,useEffect} from "react";
import { userFormConfig } from "./userForm.config.js";

const DynamicUserForm = () => {
    const [formData,setFormData] = useState({});
    console.log(userFormConfig);
    console.log(formData);
    const handleChange = (e) => {
        const {name,value} = e.target;
           setFormData((prev) => ({
            ...prev,
            [name]:value
           }))
    }
    return(
        <div>
        <h6>Config Driven Forms</h6>
        <form>
        {
            userFormConfig.map((fields,i) => {
                return(
                    <div>
                        <label>{fields.label}</label>
                       
                        {
  fields.type === "button" ? (
    <button type="button">{fields.label}</button>
  ) : fields.type === "radio" ? (
    <input
      name={fields.name}
      type="radio"
      value={fields.value}
      checked={formData[fields.name] === fields.value}
      onChange={handleChange}
    />
  ) : (
    <input
      name={fields.name}
      type={fields.type}
      value={formData[fields.name] || ""}
      onChange={handleChange}
    />
  )
}

                    </div>
                )
            })
        }
        </form>
        </div>
    )
}
export default DynamicUserForm;