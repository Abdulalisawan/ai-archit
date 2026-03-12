"use client"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useState } from 'react';

const Textare = () => {
    const [device,setdevice]=useState<string>('Website')
    const[prompt,setprompt]=useState<string>()
    const[loading,setloading]=useState(false)

    const{user,isLoaded}=useUser()
    const router= useRouter()
    const createproject=async()=>{
      if(!isLoaded)return
        if(!user){
            router.push('/sign-in')
            return

        }
        const projectid=crypto.randomUUID()
        setloading(true)

        try{
            const projectdetailsend= await axios.post('/api/project',{
            UserInput:prompt,
             device:device,
             ProjectId:projectid

        })

          console.log(projectdetailsend.data)
        }finally{
            setloading(false)
            router.push("/projects/"+projectid)
        }

      
        
        



    }
    return (
      <div className="w-full px-4 mt-3">
        <div className="flex  bg-black mt-3 w-full max-w-md  mx-auto gap-6  ">
      <InputGroup  className="w-full">
        <InputGroupTextarea
        onChange={(event)=>setprompt(event.target?.value)}
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-2xl bg-black px-3 py-2.5 text-white outline-none md:text-sm"
          placeholder="Enter your UI idea "
        />
        <InputGroupAddon align="block-end">
        <Select defaultValue={'Website'} onValueChange={(value)=>setdevice(value)}>
  <SelectTrigger  className="w-[180px]">
    <SelectValue placeholder="Type" />
  </SelectTrigger>
  <SelectContent >
    <SelectGroup>
      <SelectItem value="Website">Website</SelectItem>
      <SelectItem value="Mobile">Mobile</SelectItem>
    
    </SelectGroup>
  </SelectContent>
</Select>
          <InputGroupButton disabled={loading} onClick={()=>createproject()} className="ml-auto" size="sm" variant="default">
            {loading ? <Loader className="animate-spin text-white"></Loader> : 'Generate'}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
    </div>
    
    );
};

export default Textare;