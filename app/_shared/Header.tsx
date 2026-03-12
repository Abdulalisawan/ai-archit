"use client"
import { TypingAnimation } from '@/components/ui/typing-animation';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react';


const Header = () => {
  const {isSignedIn,user}=useUser()
    return (
        <>
        <div className='flex flex-col md:flex-row justify-between items-center  w-[95%] px-2 gap-3  mx-auto  mt-2  '>
        <div className='text-3xl flex-1 font-semibold lg:pl-6 text-white'><h1 className="  font-extrabold 
  bg-gradient-to-b
  from-white via-gray-300 to-gray-500
  bg-clip-text text-transparent
  drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]
  drop-shadow-[0_2px_0_rgba(200,200,200,0.9)]
  drop-shadow-[0_3px_0_rgba(160,160,160,0.9)]
  drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"> <TypingAnimation> ᗩᖇᑕᕼIT</TypingAnimation></h1></div>
  <div className='flex-1  md:mr-50'>
    <ul className='   font-semibold cursor-pointer flex gap-7 items-center  text-gray-400'>
      <li className='hover:text-xl hover:text-green-500  duration-150 ease-in-out'>ᕼOᗰE</li>
      <li className='hover:text-xl hover:text-green-500  duration-150 ease-in-out'>ᗩᗷOᑌT</li>
      <li className='hover:text-xl hover:text-green-500  duration-150 ease-in-out'>ᑕOᑎTᗩᑕT</li>

    </ul>


  </div>

  <div className='flex gap-2 items-center'>

  {

    isSignedIn ? <UserButton></UserButton> : (
      <>
    <SignInButton mode='modal'>
<button
  className="
  group
 
  flex items-center gap-2
 px-3 py-1
  cursor-pointer
  bg-black
  rounded-lg
  border border-gray-500
  overflow-hidden
  transition-all duration-300
  hover:border-[#34FB94]
"
>
  <span
    className="
    bg-gradient-to-r
    from-gray-200 via-gray-400 to-gray-200
    bg-clip-text
    text-transparent
    font-semibold
    tracking-wide
  "
  >
    Sign In
  </span>

  <span
    className="
    text-gray-300
    transform
    transition-transform duration-300
    group-hover:translate-x-2
  "
  >
    →
  </span>

</button>
</SignInButton>
<SignUpButton mode='modal'>
<button
  className="
  group
  relative
  flex items-center gap-2
 px-3 py-1
  cursor-pointer
  bg-black
  rounded-lg
  border border-gray-500
  overflow-hidden
  transition-all duration-300
  hover:border-[#34FB94]
  
"
>
  <span
    className="
    bg-gradient-to-r
    from-gray-200 via-gray-400 to-gray-200
    bg-clip-text
    text-transparent
    font-semibold
    tracking-wide
  "
  >
    Sign Up
  </span>

  <span
    className="
    text-gray-300
    transform
    transition-transform duration-300
    group-hover:translate-x-2
  "
  >
    →
  </span>

</button>
</SignUpButton>
</>
)

  }

  </div>
  


  </div>

  
        
        
        </>
        
    );
};

export default Header;