import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email");
            console.log("Please enter a valid email")
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            toast.error("Please enter a valid password");
            console.log("Please enter a valid password")
            return;
        }

        console.log(formData);
        toast.success("Form submitted successfully");
    };


    return (
        <div className='flex items-center justify-center'>

            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-3 px-2 md:px-20 py-5
                 text-gray-600  h-auto w-auto bg-gray-100 rounded-2xl shadow-2xl'
            >
                <div>
                    <h1>Create Account</h1>
                    <p>Please sign up to book appointment</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <label>Enter the full name:</label>
                    <input
                        type="text"
                        name='fullNae'
                        required
                        onChange={handleChange}
                        value={formData.fullName}
                        placeholder='Enter the last name'
                        className='border p-2 border-gray-400 rounded-xl'

                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Enter the email:</label>
                    <input
                        type="emai"
                        name='email'
                        required
                        onChange={handleChange}
                        value={formData.email}
                        placeholder='Enter the email:'
                        className='border p-2 border-gray-400 rounded-xl'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label >Enter the password</label>
                    <input
                        type="password"
                        name='password'
                        required
                        onChange={handleChange}
                        value={formData.password}
                        placeholder='Enter the password'
                        className='border p-2 border-gray-400 rounded-xl'
                    />
                </div>

                <button
                    type='submit'
                    className='justify-center bg-blue-600 text-white py-2 rounded-2xl cursor-pointer
                hover:bg-blue-400'
                >
                    Create Account
                </button>

                <div className='flex gap-2 w-full'>
                    <p className='text-gray-600'>Already have an account ? </p>
                    <p
                        onClick={() => navigate("/login")}
                        className='text-green-500 cursor-pointer'>login here</p>
                </div>
            </form>
        </div>
    )
}

export default Signup