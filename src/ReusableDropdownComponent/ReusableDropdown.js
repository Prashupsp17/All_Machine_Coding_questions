import {useState,useEffect} from "react";
import DropDown from "./DropDown";

const ReusableDropdown = () => {
  const options = [
    { id: 1, label: "React", value: "react" },
    { id: 2, label: "Angular", value: "angular" },
    { id: 3, label: "Vue", value: "vue" },
    { id: 4, label: "JavaScript", value: "javascript" },
  ];
  const [placeholder,setPlaceHolder] = useState("Please select options");

      const [selected,setSelected] = useState([]);
      console.log(selected);

      const [search,setSearch] = useState("");
      const [copyOptions,setCopyOptions] = useState(options);

      const handleSearch = (value) => {
        console.log(value);
        setSearch(value);

        if(value.trim() != ""){
          const updatedData = options.filter((item,i) => item.label.toLowerCase().includes(value.toLowerCase()));
          setCopyOptions(updatedData);
        }else{
          setCopyOptions(options);
        }
           
      }

      const handleChange = (value,checked) => {
       if(checked){
        setSelected((prev) => [...prev,value]);
       }else{
        setSelected((prev) => prev.filter((item,i) => item.id !== +value.id));
       }
      }
      return(
        <div>
            <h6>Dropdown</h6>
            <DropDown 
            options={copyOptions}
            value={search}
            onChange={handleSearch}
            placeholder={placeholder}
            setPlaceHolder={setPlaceHolder}
            handleChange={handleChange}
            selected={selected}
            />
        </div>
      )
}
export default ReusableDropdown;