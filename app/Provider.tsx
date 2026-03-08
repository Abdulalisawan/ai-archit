"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Usercontext } from '@/context/Usercontrext';



const Provider = ({children}:any) => {
    const[userdetail,setuserdetail]=useState()
    useEffect(()=>{
        enteruserdata()
    },[])

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