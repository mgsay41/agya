import React, { useState } from "react";
import {
  Search,
  Plus,
  ListFilter,
  Bell,
  FileText,
  Calendar,
  FilePlus,
} from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-main"></div>
            <span className="text-main font-semibold hidden sm:block">
              logo-ipsum
            </span>
          </div>
        </a>

        {/* Centered Search Bar */}
        <div className="flex-1 max-w-xl mx-auto flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-500"
            />
          </div>
          {/* Menu Button */}
          <button className="p-3 rounded-xl bg-main text-white hover:bg-opacity-90">
            <ListFilter className="w-8 h-5" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 relative">
          {/* New Button */}
          <button
            className="hidden sm:flex items-center px-9 py-2 bg-main text-white rounded-xl hover:bg-opacity-90 relative"
            onClick={toggleDropdown}
          >
            <Plus className="w-5 h-5" />
            <span>New</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-14 pb-4 right-0 w-48 bg-main text-white rounded-xl shadow-lg z-50">
              {/* Arrow Pointer */}
              <div className="absolute -top-2 right-24 w-4 h-4 bg-main transform rotate-45"></div>
              {/* Dropdown Items */}
              <a
                href="/new-post"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
              >
                <FileText className="w-5 h-5" />
                <span>New Post</span>
              </a>
              <hr className="border-t border-gray-300 w-11/12 mx-auto" />
              <a
                href="/new-article"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
              >
                <FilePlus className="w-5 h-5" />
                <span>New Article</span>
              </a>
              <hr className="border-t border-gray-300 w-11/12 mx-auto" />
              <a
                href="/new-event"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
              >
                <Calendar className="w-5 h-5" />
                <span>New Event</span>
              </a>
              <hr className="border-t border-gray-300 w-11/12 mx-auto" />
            </div>
          )}

          <button className="p-3 rounded-xl bg-main text-white hover:bg-opacity-90">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
