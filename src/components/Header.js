import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({  showButtons , handleSignInClick })=>{
    const navigate = useNavigate();
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
            <img  className=" w-14" alt="user-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8Ae30Adnj7/f0AcHLt9PSiw8P2+vpTnZ7y+Pjl8PCBsrMAdHdMl5kxioy+29upzc7U5OS91tdaoqN3qKmIr7CJubqSvb6x0dIxhIZEjI48h4hhoKGaxMXO5OR6tbZvrrA9k5Uah4nK2tuXb2ZTAAAD90lEQVR4nO3bYXeqIBwGcAVyJqaJOTGHpvb9P+PVWlsmnVZ4cTvn+b2698X47xkIKug4AAAAAAAAAAAAAAAAAAAAAAAAALMiJwuVduYs3Te1L6Oo3DvW8/QFP8r1jKVJrKraZ8ytKxVbjUOcOEu4y1hQS9XNUZmqred+YmlmMQ1xDttLZZcnETVvMePuFR46ttKQuPKuS4udaZpNOGrQdb3cUt+QfeWPS/O1WRqiuHuDZ5bChP5taVGalCZdetug625jK2kiMS2dmIwK2kw6pp8FQith5LSyy00mAVpoWnQTG3PAvtZUZm+blxsk8VbTosuNhu4PS3/oKrvp639HOr38T9YWwuy0lUX7epgs0Da5sxDmoA8TIczgFw6z18OQWDeluIGNCaDUhtka3G4SzZrZt7i3MTVrB0Vhss7c3pmd2Fk0K01lrgzCaMeZwbh9pnSk6ZrUqEnaTLrGt9MxuvnM9LZ5k9/Mzqyy9giQsHHpQL1+M3NukuSjvvEqO/fMQ+m4GD0EeKFhlr7JzU58dQ4TIbX52CzFV+d42/VqhjZpm6fCY77PU9nafaFBoreU+z7zRBrG5q8ATm1SJ8re399VZ7FbLqU71VfOIme+0oTQwRJvAZerDAAAAAAAAAAAAPAyQpc6WDk7Qh2VZdEyceat2reWFdzzRD7L4cYni9Ouo/NsQQz6XknPO5yBnK3RHxdvi1qkajNLnP5aUenX7p3RfvMraHPaamNFa77XRVZOU1/vBkrb4+yyd+fldGN08fRRwpsd9MpumFVyVTuPXp0L+ol4r6aH96qZf9sH6OhwpZeo54+LD0fm96oSbJLFz+xeM/TmpCirpSqf2JPsr3inVPl2cnh2aCuxtnN/Nhpmn3PQUWYtofRRD532TjsVJrX+bFhgO4tDWs3flHl1kqto79xLNORwulKFw2a5NonrFZn9NZNK3VmofrxzkVZStR1drVb0YkOH/5IuyvIqFVx/9nD46bTpNkvczSjtqduhg3yfcyGORXU4NOvBrjmEb4kQgnuBP73gvweYiq19hTBCSHzQnBcfhQqCwDvp/8HuhzjjibL/7c51HO25u5fwsF2mU77jbEhzb7A9I0h3q0UulUmcXRHcmZl+hAVCtjPefZuhq07W92baB3xey/g3dMq34VhSdXw6TyCOcoFDVA+R4YFEFj/uoGE1SsL28e3CQvrFvWszmaTi7pL4iR8LmamY/NYkZ6c3K3GUhbLY8v5p/mptYaxfcXgfowqzqOxm/cT0/yHDiHPijzJSTZiHb2cyzA9KReXH/g++Tbp8Wfz1W5PPL37/VgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9/gH7gDBYPxaZ2QAAAABJRU5ErkJggg=="/>
            <button  onClick={handleSignOut} className="font-bold text-white">(Sign out)</button>
        </div>
         )}
        </div>
        
    )
}

export default Header;