import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "./Nav"


const Comments = () => {
  const [data, setData] = useState([])

  useEffect(() =>{
    const fetchData = async () =>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
      const result = response.data
      setData(result)
    }
    fetchData()
  },[])
  
  return (
    <div>
      <Nav />
      <h1>Comments</h1>
      <ul>
        {data.map((item) =>(
          <div key={item.id}>
            <pre>
              <li>name: {item.name} </li>
              <li>email: {item.email} </li>
              <li>body: {item.body} </li>
            </pre>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Comments