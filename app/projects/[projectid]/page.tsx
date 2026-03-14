"use client"
import React from 'react';
import Projectheader from '../_shared/Projectheader';
import ProjectSetting from '../_shared/ProjectSetting';
import Uiux from '../_shared/Uiux';
import { projecttype, systemco } from '@/type/type';
import axios from 'axios';

import { useParams } from 'next/navigation';
import  { useEffect, useRef, useState } from 'react';
import { Loader } from 'lucide-react';


const page = () => {
     const{projectid}=useParams()
    const [projectdata, setprojectdata]=useState<projecttype>()
    const[loading , setloading]=useState(false)
    const[loadingmassage , setloadingmassage]=useState('')
    const [generating,setGenerating] = useState(false)
    const[systemconfigue,setsystemconfigue]=useState<systemco[]>([])
    const hasAttemptedGeneration = useRef(false);
  
    const getprojectdetail=async()=>{

        try{
              setloading(true)
        setloadingmassage('GETTIᑎG ᑭᖇOᒍEᑕT ᗪᗩTᗩ...')
        const result= await axios.get(`/api/project/${projectid}`)
       
        
       
        console.log(result.data)
        setprojectdata(result.data?.isconfig[0])
        setsystemconfigue(result.data?.system)
        
        
      

        }catch(err){
            console.log(err)
        }finally{
           setloading(false)
       
        }
      
        
    }
      useEffect(()=>{
        getprojectdetail()
    },[])
    
    
    const generatesystemconfigue= async()=>{
        if(hasAttemptedGeneration.current)return
        try{
            setGenerating(true)
        hasAttemptedGeneration.current=true
        setloadingmassage('GEᑎᖇEᗩTIᑎG ᔕYᔕTEᗰ......')
        const result=await axios.post('/api/generateconfigue',{
            userInput:projectdata?.UserInput,
            device:projectdata?.device,
            projectId:projectdata?.ProjectId

        })
        
        console.log(result.data)
        await getprojectdetail()
        
       


        }catch(err){
            console.log(err)
        }finally{
           
      setGenerating(false);
   
        }
        
          
        
     
    }
    useEffect(()=>{
          if(projectdata && systemconfigue && systemconfigue.length === 0 && !hasAttemptedGeneration.current){
             
              generatesystemconfigue()
            
        
          
        }
    },[projectdata,systemconfigue])


    return (
        <>

         {
                loading || generating === true ? (<><div className='flex items-center border border-gray-700 max-w-[20%] mx-auto py-2 rounded-b-3xl justify-center text-white font-semibold text-xl '>{loadingmassage}<Loader className='animate-spin text-5xl'></Loader></div></>):(<>  <div className=''>
            <Projectheader></Projectheader>
            <div className="flex gap-3">
                <div className=" text-white border-gray-600  border-r h-[90vh]  w-[320px]">
                    <ProjectSetting project={projectdata} ></ProjectSetting>
                </div>
                <div className='flex-1'>
                    <Uiux ></Uiux>
                </div>
            </div>
            
        </div></>)
        }
        
        
        </>
      
    );
};

export default page;