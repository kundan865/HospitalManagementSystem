import React, { useState } from 'react'
import { FcAbout } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import RelatedDoctors from './RelatedDoctors';

const Appointment = () => {

  const { docId } = useParams();
  const { doctors } = useSelector((state) => state.doctor)
  const doctor = doctors.find((doc) => doc.id.toString() === docId);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00"];
  const now = new Date();
  now.setDate(now.getDate() + 1);

  const [selectedDayDate, setSelectedDayDate] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);

  return (
    <div className='flex flex-col gap-5 sm:flex-row md:flex-row'>

      {/* left side  */}
      <div className='border border-gray-800 h-fit p-2 rounded-xl'>
        <img src={doctor.image} alt="" />
      </div>

      {/* right side */}
      <div>

        <div className='border border-gray-500 p-2'>
          <div>
            <h1 className='text-2xl font-medium'>{doctor.name}</h1>
            <div className='flex gap-2 text-gray-500'>
              <p >{doctor.degree}</p>
              <p>{doctor.experience}</p>
            </div>
          </div>

          <div className='flex ites-center text-center gap-2 mt-3'>
            <p>About </p>
            <FcAbout className='mt-1.5' />
          </div>
          <p className='text-gray-500 w-[80%]'>{doctor.about}</p>
          <div className='flex gap-4 mt-3'>
            <h1>Appointment Fee</h1>
            <h1 className='text-green-700'>${`${doctor.fees}`}</h1>
          </div>
        </div>

        <div className='mt-5'>

          <h1 className='text-xl text-gray-600'>Book Slots:</h1>

          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2 sm:gap- md:gap-5 mt-5'>
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                onClick={() => (
                  setSelectedDayDate({
                    day: days[(now.getDay() + i) % 7],
                    date: now.getDate() + i,
                  }),
                  setSelectedIndex(i)
                )}
                className={`border border-gray-500 rounded-2xl p-2 cursor-pointer ${selectedIndex === i
                  ? "bg-blue-500 text-white"
                  : ""
                  }`}
              >
                <h1>{days[(now.getDay() + i) % 7]}</h1>
                <h1>{now.getDate() + i}</h1>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-7 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-4 mt-4'>
            {times.map((time, idx) => (
              <div 
              key={idx}
              className={`flex border w-auto border-gray-500 lg:px-4 rounded-2xl items-center justify-center ${selectedTimeIndex === idx ? "bg-blue-500 text-white" : ""}`}
                onClick={() => (
                  setSelectedTimeIndex(idx),
                  setSelectedTime(time)
                )}
              >
                <h1>{time}</h1>
              </div>
            ))}
          </div>

        </div>

        <button
          // onClick={}
          className='mt-5 bg-blue-800 px-3 py-2 rounded-full cursor-pointer text-white'
        >
          Book Appointment
        </button>

        <div>
          <RelatedDoctors speciality={doctor.speciality} />
        </div>
      </div>
    </div>
  )
}

export default Appointment