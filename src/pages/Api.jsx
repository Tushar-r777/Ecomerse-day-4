import React, { useEffect, useState } from 'react'
import { data } from 'react-router';

const Api = () => {
  const[userData,setUserData]=useState([]);
    useEffect(()=>{
       fetch ("https://jsonplaceholder.typicode.com/users").then((res)=>{
        return res.json();
    }).then((data)=>{
        setUserData(data)
    })
    },[]);
  return (
    <div>
      {
        userData.map((user)=>(
          <h1>{user.name}</h1>
        ))
      }
    </div>
  )
}

export default Api
