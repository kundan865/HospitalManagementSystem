import React from 'react'
import { assets } from '../assests/assests'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const  navigate = useNavigate();
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between gap-10 mt-20 px-6 md:px-10 py-10'>

        {/* Logo & About */}
        <div className='md:w-1/2'>
          <div className='flex items-center gap-2 mb-4'>
            <img className='h-12 w-12 rounded-full' src={assets.logo} alt="LifeCare Logo" />
            <h1 className='text-2xl font-semibold'>LifeCare</h1>
          </div>

          <p className='text-gray-600 leading-7'>
            LifeCare Hospital is a trusted healthcare institution dedicated to
            providing high-quality medical services with compassion and excellence.
            Equipped with modern technology and advanced medical facilities, the
            hospital offers comprehensive care across various specialties.
          </p>
        </div>

        {/* Company */}
        <div>
          <h1 className='text-lg font-semibold mb-4'>COMPANY</h1>
          <ul className='space-y-2 text-gray-600'>
            <li onClick={()=>navigate("/")} className='cursor-pointer'>Home</li>
            <li onClick={()=>navigate("/about")} className='cursor-pointer'>About Us</li>
            <li onClick={()=>navigate("/contact")} className='cursor-pointer'>Contact Us</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h1 className='text-lg font-semibold mb-4'>GET IN TOUCH</h1>
          <ul className='space-y-2 text-gray-600'>
            <li>+91 8651884556</li>
            <li>lifecare865@gmail.com</li>
          </ul>
        </div>

      </div>
      <div className='border-t'>
        <p className="text-center text-sm text-gray-500 py-5">© 2026 LifeCare Hospital. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer