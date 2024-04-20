import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = ({ isSignUp }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    if (message) return null;

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/82d5fa1d-52d6-4a74-a58f-38ef1316db1c/PL-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute rounded-lg sm:w-6/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 w-7/12 p-8 px-12 bg-black bg-opacity-90
      my-28 mx-auto right-0 left-0 text-white'>

        <h1 className=' font-bold text-2xl py-4'>{isSignUp ? "Sign Up" : "Sign In"} </h1>

        {isSignUp && <input ref={nameRef} type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800" />}
        <input ref={emailRef} type="text" placeholder="Email address" className="p-2 my-2 w-full bg-gray-800 " />
        <input ref={passwordRef} type="password" placeholder="Password" className="p-2 my-2 w-full  bg-gray-800" />
        <p className='font-bold text-red-600 text-l'>{errorMessage}</p>
        <button className='p-2 my-2 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignUp ? "Sign Up" : "Sign In"} </button>

        <div className='my-4 cursor-pointer'>
          {isSignUp ? "Already Registered? " : "New to Netflix? "}
          <Link to={isSignUp ? "/signin" : "/signup"} className="text-white font-bold hover:underline">{isSignUp ? "Sign In Now" : "Sign Up Now"}</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
