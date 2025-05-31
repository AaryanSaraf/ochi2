import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { Power4 } from 'gsap';

function Featured() {
   const cards= [useAnimation(), useAnimation()];
   const handleHover =(index)=>{
    cards[index].start({y:"0%"});
   };
   const handleHoverEnd =(index)=>{
    cards[index].start({y:"100%"});
   };

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20 '>
            <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-10'>
        <div className='cards w-full flex gap-10 mt-10'>
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer relative rounded-2xl w-1/2 h-[70vh]  '>
                <h1 className=' absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-["Test_Founders_Grotesk_X-Condensed"] text-8xl tracking-tight leading-none'>
                {"SalienceLabs".split("").map((item, index) => (
                    <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.01}} className='inline-block'>{item }</motion.span >
                ))}
                </h1>
                    <div className='card w-full rounded-2xl h-full overflow-hidden'>
                        <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                </motion.div> 
                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer relative rounded-2xl w-1/2 h-[70vh]  '>
                <h1 className=' absolute flex overflow-hidden text-[#CDEA68] right-full  translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-["Test_Founders_Grotesk_X-Condensed"] text-8xl tracking-tight leading-none'>
                {"CardboardSpaceship".split("").map((item, index) => (
                    <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.01}} className='inline-block'>{item }</motion.span >
                ))}
                </h1>
                <div className='card w-full rounded-2xl h-full overflow-hidden'>
                <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Featured