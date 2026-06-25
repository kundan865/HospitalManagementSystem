import React from 'react'
import { useSelector } from 'react-redux'

const RelatedDoctors = ({ speciality }) => {
    const { doctors } = useSelector((state) => state?.doctor);

    const finalDoctor = doctors.filter(
        (doc) => doc?.speciality?.toLowerCase() === speciality?.toLowerCase()
    );
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='w-full sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
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
        </div>
    )
}

export default RelatedDoctors