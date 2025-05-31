import React from 'react';
import {motion} from 'framer-motion';

function Marquee() { 
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl '>
        <div className='text border-t-2 border-b-2  border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden'>
            <motion.h1  intial= {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5 }}  className='text-[22vw] text-white leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold pb-25 -mb-[7vw] uppercase '>We are Ochi</motion.h1>
            <motion.h1 intial= {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5 }}   className='text-[22vw] text-white leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold pb-25 -mb-[7vw] uppercase '>We are Ochi</motion.h1>
            <motion.h1  intial= {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5 }}  className='text-[22vw] text-white leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold pb-25 -mb-[7vw] uppercase '>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee