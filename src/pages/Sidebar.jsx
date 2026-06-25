import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const h1Style = "border border-gray-200 p-1 w-[60%] cursor-pointer";
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-4 mt-5'>
            <h1 onClick={() => navigate(`/doctors/cardiologist`)} className={h1Style}>Cardiologist</h1>
            <h1 onClick={() => navigate(`/doctors/dermatologist`)} className={h1Style}>Dermatologist</h1>
            <h1 onClick={() => navigate(`/doctors/orthopedic`)} className={h1Style}>Orthopedic</h1>
            <h1 onClick={() => navigate(`/doctors/pediatrician`)} className={h1Style}>Pediatrician</h1>
            <h1 onClick={() => navigate(`/doctors/neurologist`)} className={h1Style}>Neurologist</h1>
            <h1 onClick={() => navigate(`/doctors`)} className={h1Style}>All doctors</h1>
        </div>
    )
}

export default Sidebar