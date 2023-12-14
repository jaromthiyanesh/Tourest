import React from 'react'

const Navbar = () => {
  return (
    <nav className=' h-20 '>
      <div className='container mx-auto' >
        <div className='w-[90%] mx-auto  grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  '>

          <div className='  h-20 flex flex-col justify-center'>
            <h1 className='font-bold text-5xl  text-blue-950'>Tourest</h1>
          </div>
          <div className=' h-20 text-xl font-semibold flex flex-col justify-center items-center'>
            <ul className='flex space-x-12 cursor-pointer  text-blue-950'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline' >Tours</li>
            <li className='hover:underline' >Blogs</li>
            <li className='hover:underline' >About Us</li>
            <li className='hover:underline' >Contact Us</li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
