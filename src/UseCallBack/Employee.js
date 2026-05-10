import React from "react";
import { useEffect,useState,useCallback,useMemo} from "react";
import EmployeeRow from "./EmployeeRow";
const Employee =  () => {

    const [users,setUsers] = useState([]);
     const [search, setSearch] = useState("");
     const [debouncedSearch,setDebouncedSearch] = useState("");

    const fetchUsers = async() => {
        try{
            const res = await fetch(`https://dummyjson.com/users`);

            if(!res.ok){
                throw new Error(`status res ${res.status}`)
            }

            const data = await res.json();
            console.log(data);
            setUsers(data.users);

        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUsers();
    },[]);

   

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Debounced Search:", search);
    
            setDebouncedSearch(search);
        }, 5000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    const handleDelete = useCallback((userId) => {
           setUsers((prev) => prev.filter((item,i) => item.id != userId))   ;
    },[]);

  const filteredUsers = useMemo(() => {
    return users.filter((item,i) => item.firstName.toLowerCase().includes(search.toLowerCase()));
  },[users,debouncedSearch]);

    return(
        <div>
            <h1>Employee LList</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <EmployeeRow
            data ={filteredUsers} 
            handleDelete={handleDelete}
             />
        </div>
    )

}
export default Employee;