/* eslint-disable react/jsx-key */
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Nav from "./Nav"



const Users = () => {
  const [data, setData] = useState([])

  useEffect(() =>{
    const fetchData = async () => {

      const response = await  axios.get("https://jsonplaceholder.typicode.com/users")

      setData(response.data)
      console.log(response.data);
      
    }
    fetchData()
    
  },[])

  return (
    <div>
      <Nav />
      <h1>Users</h1>
      <ul>
        {data.map((item) => (
          <pre>
            <div key={item.id}>
              <li>name: {item.name}</li>
              <li>username: {item.username}</li>
              <li>City: {item.address.city}</li>
              <li>Street Address: {item.address.street}</li>
              <li>Email: {item.email}</li>
              <li>Phone: {item.phone}</li>
            </div>        
          </pre>
        ))}
      </ul>

    </div>
  )
}

export default Users