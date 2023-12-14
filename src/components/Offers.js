import React from 'react'

const Offers = () => {
    return (
        <div>
            <div className='2xl:container py-5'>
                <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2  '>
                    <div  className=' flex flex-col justify-center items-center h-96  '>
                        <div className='space-y-6 ' >
                            <h3 className='text-xl font-semibold text-blue-950'>Exclusive Limited-Time Tour Offer!</h3>
                            <p className=' sm:text-md lg:text-lg font-medium text-blue-900 '>Embark on a personalized journey with our exclusive tour packages. Immerse yourself in diverse cultures, enjoy premium accommodations, and explore with expert guides. Benefit from limited-time discounts and flexible booking options. Book now for a unique travel experience!</p>
                            <div className='flex flex-col justify-center items-center'>
                            <button className='bg-blue-600  text-white px-6 py-3 rounded-full transform hover:scale-110 transition-transform duration-300 hover:bg-red-600 hover:text-white'>Explore Offers</button>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <img src='https://ik.imagekit.io/jaromjery/international%20tour%20image/wepik-export-202312120845172xtM.jpeg?updatedAt=1702370760597' alt='offer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
