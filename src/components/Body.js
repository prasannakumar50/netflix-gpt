import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignIn from './SingIn';
import SignUpForm from './SignUpForm';

const Body = () => {
  
 

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    },
    {
      path: "/signup",
      element: <SignUpPage/>
    },
    {
      path: "/signin",
      element: <SignIn/>
    },
    {
      path: "/signup-form",
      element: <SignUpForm />
    }
 ])



  return (
    <div>
      
      <RouterProvider router={appRouter} />
     
    </div>
  )
}

export default Body
