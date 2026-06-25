import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditProfile = () => {

    const { user } = useSelector((state) => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "",
        dateOfBirth: user.dateOfBirth || "",
        bloodGroup: user.bloodGroup || "",
        address: user.address || "",
        emergencyContact: user.emergencyContact || "",
        profileImage: user.profileImage || "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("address", formData.address);
        data.append("bloodGroup", formData.bloodGroup);
        data.append("dateOfBirth", formData.dateOfBirth);
        data.append("gender", formData.gender);
        data.append("emergencyContact", formData.emergencyContact);
        data.append("profileImage", imageFile);

        toast.success("Profile Updated Successfully");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setImageFile(file);

        if (file) {
            setFormData({
                ...formData,
                profileImage: URL.createObjectURL(file),
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8">

                <h1 className="text-3xl font-bold mb-8 text-center">
                    Edit Profile
                </h1>

                <form onSubmit={handleSubmit}>

                    {/* Profile Image */}
                    <div className="flex flex-col items-center mb-8">
                        <label htmlFor="profileImage">
                            <img
                                src={formData.profileImage}
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 cursor-pointer hover:opacity-80"
                            />
                        </label>

                        <input
                            id="profileImage"
                            type="file"
                            // accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                            <label className="block mb-1 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                readOnly
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Gender
                            </label>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Date of Birth
                            </label>

                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                Blood Group
                            </label>

                            <select
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            >
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>

                    </div>

                    <div className="mt-5">
                        <label className="block mb-1 font-medium">
                            Address
                        </label>

                        <textarea
                            rows="3"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1 font-medium">
                            Emergency Contact
                        </label>

                        <input
                            type="text"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition cursor-pointer"
                        >
                            Update Profile
                        </button>

                        <button
                            type="reset"
                            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProfile;