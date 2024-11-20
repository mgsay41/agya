import React from "react";
import { Search, Plus, ListFilter } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full px-4 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#8B1D1D]"></div>
            <span className="text-[#8B1D1D] font-semibold hidden sm:block">
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
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#8B1D1D] placeholder-gray-500"
            />
          </div>
          {/* Menu Button */}
          <button className="p-3 rounded-xl bg-[#8B1D1D] text-white hover:bg-opacity-90">
            <ListFilter className="w-8 h-5" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* New Button */}
          <button className="hidden sm:flex items-center gap-2 px-9 py-2 bg-[#8B1D1D] text-white rounded-xl hover:bg-opacity-90">
            <Plus className="w-5 h-5" />
            <span>New</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
