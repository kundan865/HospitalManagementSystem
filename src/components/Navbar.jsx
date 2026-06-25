import React, { useEffect, useState } from 'react'
import { appointments, assets, doctors } from '../assests/assests'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setAppointmentsDoctor, setDoctors } from '../redux/slice/doctorSlice'

const Navbar = () => {

    const hrStyle = "border-none outline-none h-0.5 w-[90%] bg-green-500 m-auto"
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(true);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        setLoggedIn(false);
    }

    useEffect(() => {
        dispatch(setDoctors(doctors));
        dispatch(setAppointmentsDoctor(appointments));
    }, []);

    return (
        <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-500'>

            <div
                onClick={() => navigate("/")}
                className='flex items-center cursor-pointer'
            >
                <div className='h-16 w-16'>
                    <img src={assets.logo} className='w-full h-full object-cover' alt="" />
                </div>
                <h1 className='text-xl font-bold'>LifeCare</h1>
            </div>

            <div className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/">
                    {({ isActive }) => (
                        <div>
                            <p>Home</p>
                            {isActive && <hr className={hrStyle} />}
                        </div>
                    )}
                </NavLink>
                <NavLink to="/doctors">
                    {({ isActive }) => (
                        <div>
                            <p>All Doctors</p>
                            {isActive && <hr className={hrStyle} />}
                        </div>
                    )}
                </NavLink>
                <NavLink to="/about">
                    {({ isActive }) => (
                        <div>
                            <p>About</p>
                            {isActive && <hr className={hrStyle} />}
                        </div>
                    )}
                </NavLink>
                <NavLink to="/contact">
                    {({ isActive }) => (
                        <div>
                            <p>Contact</p>
                            {isActive && <hr className={hrStyle} />}
                        </div>
                    )}
                </NavLink>
            </div>

            <div className='flex items-center gap-4'>
                {
                    loggedIn ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img src={assets.profilePic} className='w-8 rounded-full' alt="" />
                            <FaChevronDown className='w-2.5' />
                            <div className='absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>

                                    <p onClick={() => navigate("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>

                                    <p onClick={() => logoutHandler()} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div> :
                        <button onClick={() => navigate("/signup")} className='bg-blue-500 text-white px-4 py-2 rounded-full'>
                            Create Account
                        </button>
                }


                <div className='flex sm:hidden md:hidden items-center gap-4'>
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <MdMenu className='h-8 w-8' />
                        <div className='absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate("/")} className='hover:text-black cursor-pointer'>Home</p>

                                <p onClick={() => navigate("/doctors")} className='hover:text-black cursor-pointer'>All Doctors</p>

                                <p onClick={() => navigate("/about")} className='hover:text-black cursor-pointer'>About</p>

                                <p onClick={() => navigate("/contact")} className='hover:text-black cursor-pointer'>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar