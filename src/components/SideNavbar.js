import React from 'react';

const SideNavbar = ({ showSideNav }) => {
  return (
    <div className={`lg:hidden fixed top-0 left-0 h-full w-full bg-blue-950 text-white ${showSideNav ? 'block' : 'hidden'}`}>
      <ul className='flex flex-col items-center mt-20'>
        <li className='py-2 hover:underline'>Home</li>
        <li className='py-2 hover:underline'>Tours</li>
        <li className='py-2 hover:underline'>Blogs</li>
        <li className='py-2 hover:underline'>About Us</li>
        <li className='py-2 hover:underline'>Contact Us</li>
      </ul>
    </div>
  );
};

export default SideNavbar;
