import React from 'react'
import { assets } from '../assests/assests'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col pt-4 md:flex-row bg-blue-500 items-center justify-between mx-4 md:mx-10 px-6 md:px-10 rounded-xl'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-medium text-white'>Book Appointment </h1>
                <h1 className='text-2xl font-medium text-white'> With 100+ Trusted Doctors</h1>
                <button
                onClick={()=> navigate("/login")}
                    className='bg-white text-black w-1/2 p-2 rounded-2xl cursor-pointer'
                >
                    create account
                </button>
            </div>
            <div>
                <img className='h-85' src={assets.doctorbanner} alt="" />
            </div>
        </div>
    )
}

export default Banner