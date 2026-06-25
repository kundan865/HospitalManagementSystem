import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ChangePassword = () => {

    const { user } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        email: user.email || "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password != formData.confirmPassword) {
            toast.error("Password mismatch")
            return;
        }

        toast.success("Password changed Successfully");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-2">
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8">

                <h1 className="text-3xl font-bold mb-8 text-center">
                    Change Password
                </h1>

                <form onSubmit={handleSubmit}>

                    {/* Profile Image */}
                    

                    <div className="flex flex-col items-center">
                        <label htmlFor="profileImage">
                            <img
                                src={user.profileImage}
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-green-500 cursor-pointer hover:opacity-80 -mb-15"
                            />
                        </label>

                    </div>
                    <div className="bg-blue-600 h-35 rounded-2xl"></div>


                    {/* Form Fields */}
                    <div className="grid grid-cols-1 gap-5 mt-5">

                        <div>
                            <label className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                readOnly
                                value={user.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition cursor-pointer"
                        >
                            Change
                        </button>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default ChangePassword;