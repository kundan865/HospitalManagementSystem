import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Alldoctors = ({ speciality }) => {

    const { doctors } = useSelector((state) => state?.doctor);

    const navigate = useNavigate();

    const finalDoctor = speciality
        ? doctors.filter((doc) => doc?.speciality?.toLowerCase() === speciality?.toLowerCase())
        : doctors;

    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                finalDoctor?.map((doc, index) => (
                    <div
                        onClick={() => navigate(`/appointent/${doc.id}`)}
                        key={index}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white"
                    >
                        <img
                            className="bg-blue-50 w-full h-52 object-cover object-top"
                            src={doc.image}
                            alt={doc.name}
                        />

                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <p>Available</p>
                            </div>

                            <p className="text-gray-900 text-lg font-medium mt-2">
                                {doc.name}
                            </p>

                            <p className="text-gray-600 text-sm">
                                {doc.speciality}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Alldoctors