import React from 'react'
import { specialtyData } from '../assests/assests'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col py-16 gap-4 items-center text-gray-800'>
      <h1 className='text-3xl font-medium'>Find By Specialicity</h1>
      <p className='w-full md:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted , Schedule your appointment hassle free.</p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {
          specialtyData?.map((item, index) => (
            <Link key={index} className='flex flex-col items-center text-xs cursor-pointer hover:-translate-y-2 transition-all duration-500' to={`/doctors/${item.speciality}`}>
              <img className="w-24 h-24 sm:w-23 sm:h-23 mb-2 rounded-full" src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default SpecialityMenu