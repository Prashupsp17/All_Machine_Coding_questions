import React from "react";
import {useState,useEffect} from "react";

const useDebounce = (keyword,url) => {
     const [isLoading,setIsLoading] = useState(false);
     const [cache,setCache] = useState({});
     console.log(cache);
     const [data,setData] = useState([]);


     const fetchData = async (url,keyword,signal) => {
        setIsLoading(true);
        if(cache[keyword]){
            alert("returned from cache");
            console.log('returned from cache')
            setData(cache[keyword]);
            setIsLoading(false);
            return;
        }   
            try{
                const res = await fetch(`${url}${keyword}`,{
                    signal
                });
                if(!res.ok){
                   throw new Error(`Res status ${res.status}`);
                }
                const data = await res.json();
                setCache((prevCache) => ({
                    ...prevCache,
                    [keyword]:data?.recipes
                }))
                setData(data?.recipes);
               
               }catch(err){
               if(err.name === "abort"){
                setIsLoading(false);
                console.log(err);
               }
                // if(err) 
                  
               }finally{
                   setIsLoading(false);
               }
        
        
     }
    useEffect(() => {
        setIsLoading(true); 

        if(!keyword) {
            setData([]);      
            return;
        }

        let abortController =  new AbortController();
        let signal = abortController.signal;
        console.log(signal);
        let timeout;
        if(url && keyword){
            
            timeout = setTimeout(() => {
                fetchData(url,keyword,signal);
            },5000);
           
        }
        return () => {
            clearTimeout(timeout);
            abortController.abort();
        }
    
    },[keyword,url]);

    return {isLoading,data}
     
}
export default useDebounce;