"use client"
import { themeNames, THEMES } from '@/hooks/Data/Themes';
import React, { useState } from 'react';


const ProjectSetting = () => {
    const [ projectname, setprojectname]=useState('')
    const [ preferedtheme, setpreferedtheme]=useState(` AURORA_INK`)
    const [ usernewprompt, setusernewprompt]=useState<string>()
    return (
        <div className='w-full '>
           <div className='font-semibold text-xl text-white pl-1 mt-2'> <h1>Settings</h1></div>
           <div className='pl-1 mt-5'>
            <h1 className=' font-semibold'>Project name </h1>
            <input onChange={(event)=>setprojectname(event.target?.value)} type="text" className='text-white border py-1   mt-2 pl-2 border-gray-500 rounded' placeholder='Enter your project name ' />
           </div>
           <div className='pl-1 mt-5 mr-3'>
            <h1 className=' font-semibold'>Generate new screen</h1>
           <textarea onChange={(event)=>setusernewprompt(event.target?.value)} placeholder='Enter prompt to generate screen using Ai' className='border mt-2 pb-2 pl-1 rounded border-gray-500 w-full '></textarea>
           <button className='w-full py-2 bg-green-600 text-white rounded mt-1'> Generate using Ai</button>
           </div>

           <div className='pl-1 mt-5'>
            <h1 className=' font-extrabold text-green-700 '>TᕼEᗰEᔕ</h1>

            <div className='overflow-auto mt-2 '>

                <div>
                    {

                   themeNames.map((theme)=>(
        <div key={theme} onClick={()=>setpreferedtheme(theme)}>
    <p className=' text-xl'>{theme}</p>
    <div className={` flex my-4  py-3 mx-4 px-2 items-center gap-2 ${theme == preferedtheme && `bg-gray-300 border rounded-xl`} `}>
        <div className={`h-7 w-7  rounded-full`} style={{background:THEMES[theme]?.primary}}></div>
        <div className={`h-7 w-7  rounded-full`} style={{background:THEMES[theme]?.secondary}}></div>
        <div className={`h-7 w-7 rounded-full `} style={{background:THEMES[theme]?.accent}}></div>
        <div className={`h-7 w-7  rounded-full`} style={{background:THEMES[theme]?.background}}></div>
        <div className={`h-7 w-7  rounded-full`} style={{background:THEMES[theme]?.foreground}}></div>
        </div>
  </div>
  
                     ))

                        }
                    
                </div>
            </div>
            
           </div>
                          
        </div>
    );
};

export default ProjectSetting;