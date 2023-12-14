import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faGlobe, faRoute, faPlane, faUmbrellaBeach, faMountain  } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    return (
        <div>
            <div className='2xlcontainer py-8'>
                <div className='w-[90%] mx-auto grid grid-cols-1'>
                    <div className='space-y-3'>
                        <h1 className=' font-bold text-2xl'>Why Choose Us..???</h1>
                        <p className='font-semibold text-lg text-gray-700'> We offer experienced guides, customizable packages, and a customer-centric approach for an exceptional travel experience.</p>
                    </div >
                    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-16  py-12 '>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faGem} className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Hidden Gems Exploration</h3>
                            <p className="text-gray-700">
                                Uncover off-the-beaten-path destinations and hidden gems with our expertly crafted itineraries.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faGlobe} className="text-4xl text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Cultural Immersion</h3>
                            <p className="text-gray-700">
                                Immerse yourself in the local culture with unique activities, authentic experiences, and interactions with locals.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faRoute} className="text-4xl text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Personalized Itineraries</h3>
                            <p className="text-gray-700">
                                Tailor your journey to your preferences with personalized itineraries designed to meet your specific interests and desires.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faPlane} className="text-4xl text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Adventure Getaways</h3>
                            <p className="text-gray-700">
                                Embark on thrilling adventures and adrenaline-pumping activities with our exciting adventure getaways.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faUmbrellaBeach} className="text-4xl text-teal-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Beach Escapes</h3>
                            <p className="text-gray-700">
                                Relax and unwind on pristine beaches with our curated beach escape packages, offering sun, sand, and serenity.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[-15px] duration-300 transition-all">
                            <FontAwesomeIcon icon={faMountain} className="text-4xl text-indigo-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Mountain Retreats</h3>
                            <p className="text-gray-700">
                                Experience the majesty of mountain landscapes with our carefully curated mountain retreats, blending adventure and tranquility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
