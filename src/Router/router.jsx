import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "../Hooks/Posts";
import Users from "../Hooks/Users";
import Comments from "../Hooks/Comments";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: "/comments",
    element: <Comments /> 
  }
])


const Router = () =>{

  return( 
    <RouterProvider router={router} />
  )
}

export default Router