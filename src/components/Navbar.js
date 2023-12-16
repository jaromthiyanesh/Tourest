import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeSticky = scrollTop > 0;

      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-${isSticky ? 'blue-950' : 'white'} text-${isSticky ? 'white' : 'blue-950'} sticky top-0 z-50`}>
      <div className='2xlcontainer mx-auto'>
        <div className='W-[90%] px-8  flex items-center justify-between py-4'>

          {/* Logo */}
          <div className='flex items-center'>
            <h1 className='font-bold text-3xl'>Tourest</h1>
          </div>

          {/* Navigation Links - Hidden on Small Screens */}
          <div className='hidden lg:flex '>
            <ul className='flex space-x-4 text-xl font-semibold'>
              <li className='hover:underline'>Home</li>
              <li className='hover:underline'>Tours</li>
              <li className='hover:underline'>Blogs</li>
              <li className='hover:underline'>About Us</li>
              <li className='hover:underline'>Contact Us</li>
            </ul>
          </div>

          {/* Mobile Menu Button (visible on small screens) */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className={`text-${isSticky ? 'white' : 'blue-950'} font-semibold focus:outline-none`}
            >
              {isMobileMenuOpen ? '' : 'Menu'}
            </button>
          </div>

          {/* Mobile Menu (visible on small screens when toggled) */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden absolute top-0 right-0 bg-${isSticky ? 'blue-950' : 'white'} text-${isSticky ? 'white' : 'blue-950'} w-48 h-64 text-center transition-transform bg-blue-950 text-white transform translate-x-0 py-4`}>
              <button
                onClick={closeMobileMenu}
                className={`absolute top-2 right-4 text-${isSticky ? 'white' : 'red-600'}`}
              >
                X
              </button>
              <ul className='py-8 '>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>Tours</li>
                <li className='hover:underline'>Blogs</li>
                <li className='hover:underline'>About Us</li>
                <li className='hover:underline'>Contact Us</li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;