import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562] '>
            <div className='w-1/2 mt-10'>
            <h1 className='text-7xl'>Our Approach:</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'> Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full hover:scale-605 transition-transform duration-300 '></div>
            </button>
            </div>
            <div className='w-1/2 mt-10 h-[70vh] '>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className="h-full object-cover rounded-3xl " />
            </div>
        </div>
    </div>
  )
}

export default About
