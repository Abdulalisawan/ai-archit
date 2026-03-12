import { TypingAnimation } from '@/components/ui/typing-animation';
import React from 'react';

const Projectheader = () => {
    return (
        <div className='flex justify-between items-center px-3 border-b border-gray-600 '>
            <div className='text-3xl flex-1 font-semibold lg:pl-6 text-white'><h1 className="  font-extrabold 
              bg-gradient-to-b
              from-white via-gray-300 to-gray-500
              bg-clip-text text-transparent
              drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]
              drop-shadow-[0_2px_0_rgba(200,200,200,0.9)]
              drop-shadow-[0_3px_0_rgba(160,160,160,0.9)]
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"> <TypingAnimation> ᗩᖇᑕᕼIT</TypingAnimation></h1></div>
              <div className=' flex items-center gap-3 '>
                <button
  className="
  group
 
  flex items-center gap-2
 px-3 py-1
  cursor-pointer

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
    Save
  </span>
  </button>
                <button
  className="
  group
 
  flex items-center gap-2
 px-3 py-1
  cursor-pointer

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
    Export to figma 
  </span>
  </button>
              </div>
        </div>
    );
};

export default Projectheader;