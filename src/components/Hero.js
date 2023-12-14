import React from 'react'


const Hero = () => {
    return (
        <div className='hero ' >
            <div className='2xl:container h-[100%]'>
                <div className='w-[90%] mx-auto grid grid-cols-1 h-[100%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-center space-y-5 '>
                            <h1 className='text-blue-950 font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Explore the Wonders of Your Destination</h1>
                            <p className='text-blue-950 font-bold sm:text-lg md:text-xl lg:text-2xl'> Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences.</p>
                            <div className='space-x-5 space-y-5 '>
                                <button className='  bg-blue-500 text-white px-10 py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-blue-950'>Explore Now</button>
                                <button className=' bg-blue-500 text-white px-12 py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-blue-950'>Book Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
