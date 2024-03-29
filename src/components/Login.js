import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidData} from '../utils/validate'


const Login = () => {

  const[isSignInForm, setIsSignInForm]=useState(true);

  const[errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
      

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
     setErrorMessage(message)
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
     <form onSubmit={(e)=>e.preventDefault()}className=" w-3/12 absolute p-12  bg-black bg-opacity-80 from-black my-36 mx-auto right-0 left-0 text-white">
      <h1 className="my-2 p-2 font-bold text-2xl text-white">{isSignInForm ? "Sign In" :"Sing Up"}</h1>

      {isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800" />}
      <input ref = {email} type="text"  placeholder="Email address" className="p-2 my-2 w-full bg-gray-800 " />
      <input ref = {password} type="password"   placeholder="Password" className="p-2 my-2 w-full  bg-gray-800" />
      <p className='font-bold text-red-600 text-l'>{errorMessage}</p>

      <button className="p-2 my-2 bg-red-600 text-white w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" :"Sing Up"}
      </button>

      <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
      {isSignInForm ? "New to Netflix? Sign Up" :"Already Registered. Sign In"}
       </p>


     </form>
  
    </div>
  )
}

export default Login
