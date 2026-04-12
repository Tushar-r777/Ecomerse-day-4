
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../component/ui/Button';
import Input from '../component/ui/input';

const API = () => {
  //  const [Data, setData] = useState([]);
  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((res)=>{
  //  return res.json();
  //  })
  //  .then((data)=>{
  //   setData(data);
  //     })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }, [])


  // const [Data,setData] = useState([])
  // useEffect(()=>{
  // const api = async ()=>{
  // try {
  //   const data = await fetch ("https://jsonplaceholder.typicode.com/users");
  //     const res = await data.json();
  //     setData(res);
  //  } catch (error){}
  //    };
  //   api();
  //  },[])

  
  // const [Data,setData] = useState([])
  // useEffect(()=>{
  //   (async()=>{
  //   try{
  //     const data =await axios.get("https://jsonplaceholder.typicode.com/users");
  //   setData(data.data);
  //   } catch (error){}
  //   })();

  // },[])

  
  // const [Data,setData] = useState([])
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((error) => {
      
  //     console.log(error);
  //   });
  //  },[])

// ====================POST====================
  const [postData, setpostData] = useState({
    title:"",
    body:""
  });
  const handlePost =async ()=>{
    const data =await axios.post("https://jsonplaceholder.typicode.com/posts",{
      title:postData.title,
      body:postData.body
    })
    console.log("api=",data)
  }
  return (

//  <div>
//   <div>
//     {Data.map((item) => (
//       <div 
//         key={item.id}>
//             <h1>
//               {item.name}
//             </h1>
//             <h2>
//               @{item.username}
//             </h2>
//       </div>
//     ))}
//   </div>
// </div>
<div>
  <div>
    <Input onChange={(e) =>
      setpostData((prev) =>({...prev, title: e.target.value}))
    }/>
    <Input onChange={(e) =>
      setpostData((prev) =>({...prev, body: e.target.value}))
    }/>
    <Button onClick={handlePost} >
        submit
    </Button>
  </div>
</div>
)}
export default API



// import React, { useEffect, useState } from 'react'
// import { data } from 'react-router';

// const Api = () => {
//   const[userData,setUserData]=useState([]);
//     useEffect(()=>{
//        fetch ("https://jsonplaceholder.typicode.com/users").then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         setUserData(data)
//     })
//     },[]);
//   return (
//     <div>
//       {
//         userData.map((user)=>(
//           <h1>{user.name}</h1>
//         ))
//       }
//     </div>
//   )
// }

// export default Api
