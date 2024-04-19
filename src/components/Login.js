import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
 

  const[isSignInForm, setIsSignInForm]=useState(true);

  const[errorMessage, setErrorMessage] = useState(null);
  const navigate =useNavigate();
  
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

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
    updateProfile(user, {
      displayName: "name.current.value", 
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email,displayName:displayName}));
      navigate("/browse")
    }).catch((error) => {
          setErrorMessage(errorMessage)
    });
    
   
    
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
    navigate("/browse")
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
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/82d5fa1d-52d6-4a74-a58f-38ef1316db1c/PL-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
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

        
        <div className='my-4 cursor-pointer'>
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          <Link to="/signup" className="text-white font-bold hover:underline">Sign Up Now</Link> {/* Use Link to navigate */}
        </div>
      </form>
  
    </div>
  )
}

export default Login
