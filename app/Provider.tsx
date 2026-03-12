"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Usercontext } from '@/context/Usercontrext';
import { useUser } from '@clerk/nextjs';



const Provider = ({children}:any) => {
    const[userdetail,setuserdetail]=useState(null)
    const{isLoaded,isSignedIn}=useUser()
   useEffect(()=>{
  if(!isLoaded) return
  if(!isSignedIn) {    
    setuserdetail(null)
   return
  }
  enteruserdata()
},[isLoaded,isSignedIn])

    const enteruserdata = async()=>{
        const result= await axios.post('/api/users')
        console.log(result.data)
        setuserdetail(result.data)
    }
    return (
        <Usercontext.Provider value={{userdetail,setuserdetail}}>
        <div>
            {children}
        </div>
        </Usercontext.Provider>
    );
};

export default Provider;