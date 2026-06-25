import React from 'react'
import { assets } from '../assests/assests'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-blue-500 flex gap-10 flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-10 md:pt-20'>
            {/* left side  */}
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-bold text-white'>Book Appointment <br /> With trusted Doctors</p>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className='flex'>
                        {[assets.doc1, assets.doc2, assets.doc3].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            className={`w-10 h-10 rounded-full border-2 border-white ${index !== 0 ? "-ml-4" : ""
                                }`}
                        />
                    ))}
                    </div>
                    <p className="text-white text-sm ml-3">
                        Simply browse through our extensive list of trusted doctors, <br /> Schedule your appointment hassle free.
                    </p>
                </div>
                <div className='flex items-center justify-center bg-white w-fit p-2.5 gap-2 rounded-full'>
                    <Link to="/doctors">
                        Book Appointment
                    </Link>
                    <FaArrowRight />
                </div>
            </div>
            {/* right side  */}
            <div>
                <img className='h-100 rounded-2xl' src={assets.doctorgroup} alt="" />
            </div>
        </div>
    )
}

export default Header