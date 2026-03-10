

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group';
import { Textarea } from '@/components/ui/textarea';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

import React from 'react';
import Textare from './Textare';


const Hero = () => {

    return (
        <div>
            <section className='min-h-screen relative w-full    overflow-hidden'>
                
                <div className=' relative z-10 mx-auto lg:mt-30 mt-25 '>
                     <div className="z-10 flex  items-center justify-center">
      <div
        className={(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-green-800 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-green-800 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Archit</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
                    <div className=' flex flex-col mt-3  items-center justify-center'>
                    <h1 className="  font-extrabold text-3xl lg:text-6xl pl-6
  bg-gradient-to-b
  from-white via-gray-300 to-gray-500
  bg-clip-text text-transparent
  drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]
  drop-shadow-[0_2px_0_rgba(200,200,200,0.9)]
  drop-shadow-[0_3px_0_rgba(160,160,160,0.9)]
  drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"> <span>Design, generate, and </span><br />
  <span>ship production-ready</span></h1>
  <h2 className=' hidden md:inline md:text-3xl lg:text-5xl text-white font-bold'>UI in seconds —  <span className='text-green-500'><TypingAnimation>ᑭOᗯEᖇEᗪ ᗷY ᗩI.</TypingAnimation></span></h2>
                   
                    </div>
                </div>

           

                <div className=' absolute animate-earth inset-0 -z-10'
                 style={{
    maskImage: "linear-gradient(to bottom, transparent, black 20%)",
    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%)"
  }}
                >
  
                 
                     <Image fill alt='world' className='object-cover' src={"/newimage.png"}></Image>
                    <div className="absolute inset-0 bg-black/40"></div>
                   </div>

    

                   
                   <Textare></Textare>
                

                 




            </section>
            

                      
             </div>
    );
};

export default Hero;


