import React from "react";
// Importing required icons from Lucide React
import {
  Home,
  Info,
  Calendar,
  Image,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react"; // Added 'User' for Profile

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 text-main-font rounded-lg shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-8 bg-background">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/80" // Replace with the actual image URL
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        {/* Name */}
        <h2 className="text-lg font-semibold">Guest</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col py-4 px-6">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Home className="w-5 h-5" />
            </span>
            <span className="ml-4">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Info className="w-5 h-5" />
            </span>
            <span className="ml-4">About</span>
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Calendar className="w-5 h-5" />
            </span>
            <span className="ml-4">Activities</span>
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Image className="w-5 h-5" />
            </span>
            <span className="ml-4">Gallery</span>
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <HelpCircle className="w-5 h-5" />
            </span>
            <span className="ml-4">Help</span>
          </a>

          {/* New Profile Button */}
          <a
            href="#"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <User className="w-5 h-5" />
            </span>
            <span className="ml-4">Profile</span>
          </a>
        </div>

        {/* Login button */}
        <a
          href="#"
          className="flex items-center justify-center text-sm font-medium w-32 mx-auto mt-12 bg-[#8B4513] text-white py-2 rounded-lg hover:bg-opacity-90"
        >
          Login
        </a>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto px-4 py-6 text-xs text-gray-400 bg-background">
        <div className="w-3/4 mx-auto border-t border-gray-200">
          <p className="text-center mt-4 mb-2">
            <a href="#" className="hover:text-main">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-main">
              Content Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-main">
              Terms of Use
            </a>
          </p>
          <p className="text-center">
            Designed and Developed by: <strong>ABS.AI</strong>
          </p>
          <p className="text-center">All Rights Reserved ©2024 Agya.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
