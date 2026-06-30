import React from "react";
import {useState,useEffect} from "react";
import useDebounce from './useDebounce.js';
const SearchComponent = () => {

   
    const [search,setSearch] = useState('');
    const [active,setActive] = useState(true);
    const URL = `https://dummyjson.com/recipes/search?q=`;

    const debounce = useDebounce(search,URL);
    console.log(debounce?.data);
    console.log(debounce?.isLoading);
  return(
    <div>
           
        <input 
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder="search here" style={{width:"100%"}} value={search} onChange={(e) => setSearch(e.target.value)} />
       <ul style={{backgroundColor:"grey",listStyle:"none",color:"white",height:"auto",maxHeight:"100px" ,width:"90%",overflow:"hidden",overflowY:"auto"}}>
       
         {
             search.length > 0 && debounce?.isLoading && active ? <div>...Loading</div>
             :
             active && debounce?.data.map((item,index) => {
            return(
                <li key={item.id}>{item.name}</li>
            )
           }) 
        }
       </ul>
        {
        
    }
    </div>
   
  )
}

export default SearchComponent;