import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useLocation } from 'react-router-dom';
import {
  Home,
  Info,
  Calendar,
  Image,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react";

const Sidebar = () => {
  let location = useLocation();
  return (
    <div className="flex flex-col max-h-fit w-64 text-main-font rounded-lg border border-gray-300 bg-white shadow">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-8">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/80" // Replace with the actual image URL
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        {/* Name */}
        <h2 className="text-lg font-semibold">Salma Nofal</h2>
        {/* Description */}
        <p className="text-sm text-gray-500 text-center px-4">
          Ui/Ux Designer | Cs Graduate | Archaeology Enthusiast
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col py-4 px-6">
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Home className={`w-5 h-5 ${location.pathname === "/" ? "text-main" : ""}`} />
            </span>
            <span className={`ml-4 ${location.pathname === "/" ? "text-main" : ""} `}>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Info className={`w-5 h-5 ${location.pathname === "/about" ? "text-main" : ""}`}/>
            </span>
            <span className={`ml-4 ${location.pathname === "/about" ? "text-main" : ""} `}>About</span>
          </Link>
          <Link
            to="/activities"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Calendar className={`w-5 h-5 ${location.pathname === "/activities" ? "text-main" : ""}`}/>
            </span>
            <span className={`ml-4 ${location.pathname === "/activities" ? "text-main" : ""} `}>Activities</span>
          </Link>
          <Link
            to="/gallery"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <Image className={`w-5 h-5 ${location.pathname === "/gallery" ? "text-main" : ""}`}/>
            </span>
            <span className={`ml-4 ${location.pathname === "/gallery" ? "text-main" : ""} `}>Gallery</span>
          </Link>
          <Link
            to="/help"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <HelpCircle className={`w-5 h-5 ${location.pathname === "/help" ? "text-main" : ""}`}/>
            </span>
            <span className={`ml-4 ${location.pathname === "/help" ? "text-main" : ""} `}>Help</span>
          </Link>

          {/* Profile Button */}
          <Link
            to="/profile"
            className="flex items-center text-sm font-medium hover:text-main w-40"
          >
            <span className="w-12 inline-flex justify-end">
              <User className={`w-5 h-5 ${location.pathname === "/profile" ? "text-main" : ""}`}/>
            </span>
            <span className={`ml-4 ${location.pathname === "/profile" ? "text-main" : ""} `}>Profile</span>
          </Link>
        </div>

        {/* Logout Button */}
        <Link
          to="/logout"
          className="flex items-center text-sm font-medium hover:text-main w-40 mx-auto mt-12"
        >
          <span className="w-12 inline-flex justify-end">
            <LogOut className="w-5 h-5" />
          </span>
          <span className="ml-4">Log out</span>
        </Link>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto px-4 py-6 text-xs text-gray-400">
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
          <p className="text-center pb-4">All Rights Reserved ©2024 Agya.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
