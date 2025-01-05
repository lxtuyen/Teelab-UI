import React from 'react'
import slider from '../../assets/img/slider.webp'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full' style={{backgroundImage
    : `url(${slider})`}}>
        <div className='absolute top-0 right-0 bottom-0 left-0'></div>
            <main className='px-10 lg:px-24 z-10'>
                <button className='border rounded mt-60 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12'>
                    Shop Now
                </button>
            </main>
        
    </div>
  )
}

export default HeroSection