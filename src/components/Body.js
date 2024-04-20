import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
import appStore from '../utils/appStore';
import { Provider } from 'react-redux';
import SignUpPage from './SignUpPage';
import SignIn from './SingIn';
import SignUpForm from './SignUpForm';

const Body = () => {
  const dispatch =useDispatch();
 

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
      path: "/signupform",
      element: <SignUpForm/>
    }
 ])

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid, email:email,displayName:displayName}));
     

    } else {
      
      dispatch(removeUser());

    }
  });
  
 },[])


  return (
    <div>
      
      <RouterProvider router={appRouter} />
     
    </div>
  )
}

export default Body
