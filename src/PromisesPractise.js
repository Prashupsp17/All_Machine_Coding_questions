import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const PromisesPractise = () => {

    const [users,setUsers] = useState([]);
    console.log(users);
    const [posts,setPosts] = useState([]);
    console.log(posts);
    const [products,setProducts] = useState([]);

    const getData = async () => {
        try{
            const [usersData,postsData,productsData] = await Promise.all(
                [
                    fetch(`https://dummyjson.com/users`),
                    fetch(`https://dummyjson.com/recipes`),
                    fetch(`https://dummyjson.com/products`)
                ]
            )
            // console.log(await usersData.json());
            setUsers(await usersData.json())
            // console.log(await postsData.json());
            setPosts(await postsData.json());
            // console.log(await productsData.json());

        }catch(err){
            console.log(err);
        }finally{
            
        }
    }

    useEffect(() => {
        getData();
    },[]);
  return(
    <div>
        <p>Promises</p>
    </div>
  )
}
export default PromisesPractise;