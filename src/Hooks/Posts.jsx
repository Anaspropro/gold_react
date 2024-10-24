import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from './Nav'

const Posts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      )

      const result = response.data
      setData(result)
    } 
    fetchData()
  },[])
  return (
    <div>
      <Nav />
      <h1>Posts</h1>
      <ul>
        {
          data.map((item) =>(
            <div key={item.id}>
              <pre>
                <li>Title:  {item.title} </li>
                <li>Body:  {item.body} </li>
              </pre>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts