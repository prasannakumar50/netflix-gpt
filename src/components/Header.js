import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = ({  showButtons , handleSignInClick })=>{
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const user = useSelector(store=>store.user)

    const handleSignInClick1 = () => {
        navigate('/signin'); // Navigate to the sign-in page
      }

    const handleSignOut=()=>{

        const auth = getAuth();
            signOut(auth).then(() => {
              navigate("/")
            }).catch((error) => {
                navigate("/error")
             });

    }
    

    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid, email:email,displayName:displayName}));
          navigate("/browse")
    
        } else {
          
          dispatch(removeUser());
         
        }
      });

      return() => unsubscribe();
      
     },[])
    
    
    return(
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2">
        <img 
        className="w-44 "
        src= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt = "log" />

      {showButtons && (
        <div className="absolute top-0 right-0 m-7 flex space-x-4">
         <input type= "text" value="English" className="text-white bg-black bg-opacity-90 w-20 text-center font-bold p-1 m-1 rounded-md"/>
         <input type= "text" value="Sign in" className="text-white bg-red-700 w-20 text-center font-bold p-1 m-1 rounded-md" onClick={handleSignInClick1} />
        </div>)}

        {user && (<div className="flex  h-14  p-2 ">
            <img  className=" w-14" alt="user-icon" src={USER_AVATAR}/>
            <button  onClick={handleSignOut} className="font-bold text-white">(Sign out)</button>
        </div>
         )}
        </div>
        
    )
}

export default Header;