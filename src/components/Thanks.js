import React from 'react'

const Thanks = () => {
    return (
        <div>
            <div className='2xl:container bg-blue-50 py-5 '>
                <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 '>
                    <div className='space-y-3 flex flex-col justify-center items-center'>
                        <h1 className='text-xl font-bold text-blue-950'>Thank you for being a valuable customer to us</h1>
                        <p className='text-lg font-medium text-blue-500'>We have a surprise gift for you</p>
                        <img src='https://ik.imagekit.io/jaromjery/international%20tour%20image/wepik-export-20231212151616ftNQ.png?updatedAt=1702394213979' alt='gift-card-img' className='h-80 md:hidden' />
                        <button className='bg-blue-600  text-white px-6 py-2 rounded-full transform hover:scale-110 transition-transform duration-300 hover:bg-red-600 hover:text-white'>Redeem Gifts</button>
                        
                    </div>
                    <div className='flex flex-col justify-center items-end space-x-10'>
                        <img src='https://ik.imagekit.io/jaromjery/international%20tour%20image/wepik-export-20231212151616ftNQ.png?updatedAt=1702394213979' alt='gift-card-img' className='h-80 hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks
