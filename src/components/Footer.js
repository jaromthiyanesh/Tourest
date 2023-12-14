import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="2xl:container">
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Tourest</h2>
            <p className="text-sm mb-4">Explore the world with our exceptional travel services. Discover amazing destinations and create unforgettable memories.</p>
            <div className="flex  space-x-4">
              <button className="text-white hover:text-gray-500">Home</button>
              <button className="text-white hover:text-gray-500">Destinations</button>
              <button className="text-white hover:text-gray-500">Tours</button>
              <button className="text-white hover:text-gray-500">Contact</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="list-none space-y-3">
              <li><button className="text-white hover:text-gray-500">About Us</button></li>
              <li><button className="text-white hover:text-gray-500">Blog</button></li>
              <li><button className="text-white hover:text-gray-500">FAQ</button></li>
              <li><button className="text-white hover:text-gray-500">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">1/32 Travel Street, Trichy-620019</p>
            <p className="text-sm mb-4">info@Tourest.com</p>
            <p className="text-sm">Phone: +91-9876543210</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="text-white hover:text-gray-500">Facebook</button>
              <button className="text-white hover:text-gray-500">Twitter</button>
              <button className="text-white hover:text-gray-500">Instagram</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">© 2023 Tourest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
