import { useState } from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  const [, setResourceType] = useState('posts')
  return (
    <div>
      <div>
        <Link to='/'>
          <button onClick={() => setResourceType('posts')}>posts</button>
        </Link>
        
        <Link to='/users'>
          <button onClick={() => setResourceType('users')}>users</button>
        </Link>

        <Link to='/comments'>
          <button onClick={() => setResourceType('comments')}>comments</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav