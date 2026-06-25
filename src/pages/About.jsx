import React from 'react'
import { assets } from '../assests/assests'

const About = () => {

  const hospitalFeatures = [
    {
      title: "Efficiency",
      description:
        "LifeCare Hospital ensures quick appointment scheduling, faster diagnosis, and efficient treatment processes to provide timely healthcare services.",
    },
    {
      title: "Personalization",
      description:
        "Every patient receives personalized care plans tailored to their medical needs, ensuring the best possible treatment experience.",
    },
    {
      title: "Convenience",
      description:
        "With easy appointment booking, accessible medical services, and patient-friendly facilities, LifeCare Hospital makes healthcare convenient for everyone.",
    },
    {
      title: "Expert Doctors",
      description:
        "Our team of experienced and qualified doctors is committed to delivering high-quality medical care across multiple specialties.",
    },
    {
      title: "Advanced Technology",
      description:
        "LifeCare Hospital uses modern medical equipment and advanced diagnostic tools to provide accurate and effective healthcare solutions.",
    },
    {
      title: "24/7 Emergency Care",
      description:
        "Emergency services are available around the clock to ensure immediate medical attention whenever patients need it.",
    },
  ];
  return (
    <div>
      <h1 className='flex items-center justify-center text-2xl font-medium text-gray-600'>
        ABOUT
        <span className='ml-2 text-black'>US</span>
      </h1>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8'>
        {/* left side  */}
        <div className='flex h-100 bordr border-gray-500 lg:20% items-center justify-center'>
          <img src={assets.aboutpagedoc} className="h-95 object-cover object-top" alt="" />
        </div>

        {/* right side  */}
        <div className='flex flex-col gap-3 lg:w-[70%] border border-gray-400 p-2 mt-4 items-center justify-center'>
          <p>
            LifeCare Hospital is a trusted healthcare institution dedicated to providing quality medical
            services and compassionate patient care. The hospital is equipped with modern medical
            facilities, advanced diagnostic equipment, and a team of highly qualified doctors, nurses,
            and healthcare professionals.
          </p>
          <p>
            The hospital provides a wide range of medical services, including general medicine,
            cardiology, orthopedics, pediatrics, gynecology, emergency care, and diagnostic services.
            LifeCare Hospital operates with a patient-centered approach, focusing on delivering timely
            and efficient healthcare to people of all age groups.
          </p>
          <p>
            LifeCare Hospital is committed to excellence, innovation, and continuous improvement in
            healthcare services. The hospital maintains high standards of hygiene, safety, and medical
            ethics while ensuring that every patient receives respectful and compassionate treatment.
          </p>
        </div>
      </div>
      <h1 className='text-2xl font-medium text-gray-600 mt-10'>
        WHY
        <span className='ml-2 text-black'>CHOOSE US</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hospitalFeatures.map((feature, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-lg hover:bg-blue-600 hover:text-white hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg mb-3">
              {feature.title}
            </h3>

            <p className="text-sm leading-6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default About