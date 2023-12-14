import React from 'react'

const Personalized = () => {
    return (
        <div>
            <div className='2xl:container py-6'>
                <div className='w-[90%] mx-auto grid grid-cols-1 space-y-5'>
                    <div>
                        <h3 className='text-2xl font-bold text-blue-950 '>Personalized Tour Packages Available </h3>
                    </div>
                    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 '>
                        <div>
                            <img src='https://ik.imagekit.io/jaromjery/international%20tour%20image/friendly2.jpeg?updatedAt=1702363604331' alt='fpersonalized' className='rounded-3xl' />
                        </div>
                        <div>
                            <div>
                                <div className=' flex flex-col justify-center items-center  '>
                                    <div className='space-y-5'>
                                        <h3 className='text-xl font-semibold text-blue-950'>Craft Your Perfect Journey</h3>
                                        <p className='text-lg font-medium text-blue-900 '>
                                            Explore the world on your terms with our personalized tour packages.
                                            Benefit from personalized services and itineraries designed to cater to your individual preferences and needs.
                                            Tailored itineraries, unique experiences, and unforgettable memories just for you.
                                        </p>
                                       <div className='space-x-8 flex flex-row justify-start items-start'>
                                       <button className='bg-blue-600 text-white px-6 py-3 rounded-full transform hover:scale-110 transition-transform duration-300 hover:bg-red-600 hover:text-white'>
                                        Explore Packages
                                        </button>
                                        <button className='bg-blue-600 text-white px-6 py-3 rounded-full transform hover:scale-110 transition-transform duration-300 hover:bg-red-600 hover:text-white'>
                                        Book Now
                                        </button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalized
