import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen b-zinc-100 pt-2'>
        <div className='textstructure mt-40 px-20'>
            <div className='masker'>
                <h1 className='leading-[5 vw]  font-semibold uppercase text-9xl font-["Test_Founders_Grotesk_X-Condensed"]'>We Create</h1>
            </div>
            <div className='masker flex '>
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration: 1}} className='w-[9vw] h-[6vw]  '>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className="h-full object-cover relative top-[1.8vw] rounded-2xl " />
                </motion.div>
                <h1 className='leading-[7 vw]  font-semibold uppercase text-9xl  font-["Test_Founders_Grotesk_X-Condensed"]'>Eye Opening</h1>
            </div>
            <div className='masker'>
                <h1 className='leading-[5 vw] uppercase text-9xl  font-semibold font-["Test_Founders_Grotesk_X-Condensed"]'>Presentations</h1>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-300 mt-32 flex justify-between items-center py-5 px-20 ' >
        {["For public and private companies",  "From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none '>{item} </p>
        ) ) }
        <div className='start flex '>
            <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase '>start the project</div>
            <div className='w-10 h-10 ml-2 flex items-center justify-center rounded-full border-zinc-500 border-[2px]  '>
                <span className='rotate-[45deg] '>
                <FaArrowUpLong />
                </span>
                
                </div>
        </div>
        </div>
    </div>
  )
}

export default Landing