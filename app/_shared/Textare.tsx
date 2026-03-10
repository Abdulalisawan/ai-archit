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

    const{user}=useUser()
    const router= useRouter()
    const createproject=async()=>{
        if(!user){
            router.push('/sign-in')
            return

        }
        const projectid=crypto.randomUUID()
        setloading(true)

        const projectdetailsend= await axios.post('/api/project',{
            UserInput:prompt,
             device:device,
             ProjectId:projectid

        })
        setloading(false)
        console.log(projectdetailsend.data)



    }
    return (
        <div className="flex bg-black max-w-[50%] gap-6 mx-auto">
      <InputGroup>
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
    );
};

export default Textare;