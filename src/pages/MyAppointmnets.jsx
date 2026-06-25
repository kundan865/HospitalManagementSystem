import React from 'react'
import { useSelector } from 'react-redux'
import Appointment from './Appointment';
import { toast } from 'react-toastify';

const MyAppointmnets = () => {

  const { appointments } = useSelector((state) => state.doctor);

  const statusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      case "Completed":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const cancelAppoinmentHandler=()=>{
    toast.success("cancel appointment successfully")
  }
  return (
    <div>
      <h1 className='text-2xl font-medium text-gray-600'>My Appointments</h1>
      <div className='flex flex-col gap-5 mt-5'>
        {
          appointments?.map((appointment) => (
            <div
              className='flex flex-col md:flex-row border justify-between items-center p-3 rounded-2xl'
              key={appointment.id}
            >

              {/* left side */}
              <div className='flex flex-col sm:flex-row p-2 items-center justify-center gap-5'>
                <div>
                  <img src={appointment.image} alt="" />
                </div>

                <div className='flex flex-col ml-3 gap-1.5 '>
                  <div>
                    <h1 className='text-xl font-medium text-gray-700'>{appointment.doctorName}</h1>
                    <p className='font-medium text-gray-400'>{appointment.speciality.toUpperCase()}</p>
                  </div>
                  <div>
                    <h1 className='text-xl font-medium text-gray-700'>Address</h1>
                    <p className='text-gray-400'>{appointment.address.line1}</p>
                    <p className='text-gray-400'>{appointment.address.line2}</p>
                  </div>

                  <h1 className='text-green-500'>
                    {`Date & Time: ${appointment.appointmentDate} | ${appointment.appointmentTime}`}
                  </h1>
                </div>
              </div>

              {/* right side */}
              <div className='flex flex-col w-full md:w-fit gap-3'>
                <h1 className={`flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium ${statusStyle(
                  appointment.status
                )}`}>{appointment.status}</h1>

                <button 
                 onClick={()=>cancelAppoinmentHandler()}
                className='bg-red-400 px-3 py-1 rounded-full cursor-pointer'>Cancel</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointmnets