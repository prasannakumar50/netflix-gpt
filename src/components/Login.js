import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {

  const[isSignInForm, setIsSignInForm]=useState(true);

  const[errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
    
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
     setErrorMessage(message)
     if(message) return null

     if(!isSignInForm)
     {
      createUserWithEmailAndPassword(auth , email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " - " + errorMessage)
  });


     }
     else{
      //isSignUp
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " - " + errorMessage)
  });
     }



  }

  const toggleSignInForm =()=>{
       setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
     <Header />
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
     alt = "logo"/>
     </div>
     <form  
      onSubmit={(e)=> e.preventDefault()}
      className='absolute rounded-lg sm:w-6/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 w-7/12 p-8 px-12 bg-black bg-opacity-90
      my-28 mx-auto right-0 left-0 text-white'>
               
        <h1 className=' font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800" />}
      <input ref = {email} type="text"  placeholder="Email address" className="p-2 my-2 w-full bg-gray-800 " />
      <input ref = {password} type="password"   placeholder="Password" className="p-2 my-2 w-full  bg-gray-800" />
      <p className='font-bold text-red-600 text-l'>{errorMessage}</p>
        <button className='p-2 my-2 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>

        <div className='my-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign Up" : "Already Registered? Sign In"}  Now.</div>
      </form>
  
    </div>
  )
}

export default Login
