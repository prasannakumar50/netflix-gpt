import React, { useState } from 'react';
import Header from './Header';
import Login from './Login'; // Import the LoginForm component
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [showSignInForm, setShowSignInForm] = useState(false); // State to track whether to show sign-in form

  const handleSignInClick = () => {
    setShowSignInForm(true); // Toggle sign-in form visibility
   
  };

  return (
    <div>
      <Header showButtons={true} handleSignInClick={handleSignInClick} />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/82d5fa1d-52d6-4a74-a58f-38ef1316db1c/PL-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo" />
      </div>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50'>
        <p className="text-white  font-bold text-5xl p-2 m-2 mt-10">
          Unlimited movies, TV shows, and more.
        </p>
        <p className='text-white text-2xl  p-1 m-1'>Watch anywhere. Cancel anytime.</p>
        <p className='text-white text-2xl  p-1 m-1'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex mt-8' >
          <input type="text" placeholder="Email address" className="p-3 my-2 w-3/5 bg-black bg-opacity-80 text-white  font-bold placeholder-opacity-75 placeholder-white border border-gray-500 rounded-md" />
          
          

          <Link to="/signup-form" className="p-3 my-2 w-2/5 ml-3 bg-red-800 text-xl text-white font-bold placeholder-opacity-75 placeholder-white border border-gray-500 rounded-md">Get Started ></Link>
        </div>
        
        {/* Conditionally render the sign-in form */}
       
       {showSignInForm ? <Login isSignUp={true} /> : null}
        {/* Render sign-in link */}
       
      </div>
    </div>
  );
};

export default SignUpPage;
