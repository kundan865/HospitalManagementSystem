import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 h-32"></div>

        {/* Profile Info */}
        <div className="px-6 pb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16">
            <img
              src={user.profileImage}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">{user.fullName}</h1>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="bg-gray-50 p-4 rounded-xl">
              <h2 className="font-semibold text-lg mb-3">
                Personal Information
              </h2>

              <div className="space-y-2">
                <p><span className="font-medium">Phone:</span> {user.phone}</p>
                <p><span className="font-medium">Gender:</span> {user.gender}</p>
                <p>
                  <span className="font-medium">Date of Birth:</span>{" "}
                  {user.dateOfBirth}
                </p>
                <p>
                  <span className="font-medium">Blood Group:</span>{" "}
                  {user.bloodGroup}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h2 className="font-semibold text-lg mb-3">
                Contact Information
              </h2>

              <div className="space-y-2">
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {user.address}
                </p>
                <p>
                  <span className="font-medium">Emergency Contact:</span>{" "}
                  {user.emergencyContact}
                </p>
                <p>
                  <span className="font-medium">Joined:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={() => navigate("/edit-profile")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>

            <button 
             onClick={()=>navigate("/change-password")}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;