import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotation, setRotation] = useState(0);
    useEffect(()=>{
        window.addEventListener('mousemove', (e) => {
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;
            var angle=Math.atan2(deltaY, deltaX)*180/Math.PI;
            setRotation(angle-180);
            
    })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '>
        <div className='absolute flex gap-10  bg-red top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 '>
            <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 '>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotation}deg)` }} className='line absolute w-full h-10  top-1/2 left-1/2 '>
            <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
            </div>
            
            </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 '>
            <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 '>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotation}deg)` }} className='line absolute w-full h-10  top-1/2 left-1/2  '>
            <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
            </div>
            
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes