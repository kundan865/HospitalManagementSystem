import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar';
import Alldoctors from './Alldoctors';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

const Doctors = () => {

  const { speciality } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Browse through the doctor speciality.</h1>
      <div className='flex flex-col sm:flex-row md:flex-row gap-6'>

        <div className="hidden md:block md:w-1/5">
          <Sidebar />
        </div>

        <div className='flex justify-between sm:hidden md:hidden items-center gap-4 mt-5'>

          <h1>Find Doctor</h1>

          <div className='flex items-center gap-2 cursor-pointer group relative'>

            {/* <MdMenu className='h-8 w-8' /> */}
            <MdMenu
              className='h-8 w-8 z-50 relative'
              // className='h-8 w-8 bg-red-500 cursor-pointer z-50 relative'
              onClick={() => setMenuOpen(prev => !prev)}
            />

            {
              menuOpen && (
                <div className='absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 block'>

                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => {
                      navigate("/doctors/cardiologist")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>Cardiologist</p>

                    <p onClick={() => {
                      navigate("/doctors/dermatologist")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>Dermatologist</p>

                    <p onClick={() => {
                      navigate("/doctors/orthopedic")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>Orthopedic</p>

                    <p onClick={() => {
                      navigate("/doctors/pediatrician")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>pediatrician</p>

                    <p onClick={() => {
                      navigate("/doctors/neurologist")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>Neurologist</p>

                    <p onClick={() => {
                      navigate("/doctors")
                      setMenuOpen(prev => !prev)
                    }} className='hover:text-black cursor-pointer'>All Doctors</p>
                  </div>
                </div>
              )
            }



          </div>
        </div>

        <div className="w-full md:w-4/5">
          <Alldoctors speciality={speciality} />
        </div>
      </div>
    </div>
  )
}

export default Doctors