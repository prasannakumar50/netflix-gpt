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
      <div className='absolute rounded-lg sm:w-6/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 w-7/12 p-8 px-12 bg-black bg-opacity-90
      my-28 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-2xl py-4'>Sign Up</h1>
        <p className="text-white text-sm mt-2">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
