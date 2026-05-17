import React from "react";
import { useEffect,useState,useCallback,useMemo} from "react";
import EmployeeRow from "./EmployeeRow";
const Employee =  () => {

    const [users,setUsers] = useState([]);
    console.log(users);
     const [search, setSearch] = useState("");
     const [debouncedSearch,setDebouncedSearch] = useState("");

    const fetchUsers = async() => {
        try{
            const res = await fetch(`https://dummyjson.com/users`);

            if(!res.ok){
                throw new Error(`status res ${res.status}`)
            }

            const data = await res.json();
            
            const userData = data.users;
            const tansformedData =  userData.map((item,i) => {
                return{
                    ...item,
                    isActive:false
                }
            });
            setUsers(tansformedData);

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

  const handleStatus = ((id) => {
    const updatedStatus = users.map((item) => {
        if(item.id === id){
            return{
                ...item,
                isActive:!item.isActive,
                address:{
                    ...item,
                   city:"pune"
                },
                hair:{
                    ...item,
                    color:"greenish"
                }
            }
        }
        return item;
    })
    setUsers(updatedStatus);
  });

    return(
        <div>
            <h6>Employee LList</h6>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <EmployeeRow
            data ={filteredUsers} 
            handleDelete={handleDelete}
            handleStatus={handleStatus}
             />
        </div>
    )

}
export default Employee;