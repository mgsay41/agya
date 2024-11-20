import React, { useState } from "react";
import { Edit3 } from "lucide-react"; // Importing the Lucide edit icon

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Salma",
    lastName: "Nofal",
    affiliation: "UI/UX Designer",
    academicTitle: "CS Graduate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

      {/* Profile Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <Edit3 className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      {/* Profile Name */}
      <h3 className="text-lg font-medium text-gray-800 mt-4">
        {formData.firstName} {formData.lastName}
      </h3>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow"
      >
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>

        {/* Affiliation */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Affiliation
          </label>
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>

        {/* Academic Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Academic Title
          </label>
          <input
            type="text"
            name="academicTitle"
            value={formData.academicTitle}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-brown-500 focus:border-brown-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-700 focus:ring focus:ring-brown-400"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
