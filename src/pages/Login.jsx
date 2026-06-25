import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [formData, setFormData] = useState({
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


  const handleForgetPassword = () => {
    console.log("kundan")
    toast.success("Password has been sent to your email.");
  }


  return (
    <div className='flex items-center justify-center'>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-3 px-2 md:px-20 py-5  h-auto w-auto bg-gray-100 text-gray-600 rounded-2xl shadow-2xl'
      >
        <div>
          <h1>Login </h1>
          <p>Please login to book appointment</p>
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
          Login Here
        </button>

        <div className='flex gap-2 w-full'>
          <p className='text-gray-600'>Already have an account ? </p>
          <p
            onClick={() => navigate("/signup")}
            className='text-green-500 cursor-pointer'>signup</p>
        </div>

        <p
          onClick={() => handleForgetPassword()}
          className='flex text-red-500 justify-center items-center cursor-pointer'
        >
          forget Ppassword
        </p>
      </form>
    </div>
  )
}

export default Login