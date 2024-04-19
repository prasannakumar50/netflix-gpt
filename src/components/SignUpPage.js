import React from 'react';
import Header from './Header';

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/82d5fa1d-52d6-4a74-a58f-38ef1316db1c/PL-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo" />
      </div>
   

<div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50'>
  <p className="text-white mt-2 font-bold text-5xl p-2 m-2">
          Unlimited movies, TV shows, and more. 
        </p>
        <p className='text-white text-2xl  p-1 m-1'>Watch anywhere. Cancel anytime.</p>
        <p className='text-white text-2xl  p-1 m-1'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex'>
        <input  type="text"  placeholder="Email address" className="p-3 my-2 w-3/6 bg-gray-700 text-white font-bold placeholder-opacity-75 placeholder-white " />
        <input  type="text"  placeholder="Get Started >" className="p-3 my-2 w-3/6  ml-3 bg-red-500 text-white::placeholder font-bold " /></div>
      </div>
    </div>
  );
};

export default SignUpPage;
