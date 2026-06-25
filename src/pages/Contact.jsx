import React from 'react'
import { assets } from '../assests/assests'

const Contact = () => {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row gap-5 justify-center items-center'>
      <div className='h-90 w-80 px-5'>
        <img className='h-90 w-80 object-cover object-top' src={assets.doctorcontact} alt="" />
      </div>
      <div className='mt-10'>
        <div>
          <h1 className='text-2xl font-medium  text-gray-800'>OUR OFFICE</h1>
          <div className='mt-4 text-gray-500'>
            <p>802301 ara (bihar)</p>
            <p>Near bihari mil</p>
          </div>
        </div>
        <div className='mt-5  text-gray-500'>
          <p>Tel : +91-5865656452</p>
          <p>Email: lifacare865@gmail.com</p>
        </div>
        <div className='mt-5  text-gray-500'>
          <h1>CAREEARS AT LIFECARE</h1>
          <p>Learn more about terms and job opening.</p>
        </div>
        <div className='mt-6 border max-w-fit px-3 py-2 cursor-pointer'>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact