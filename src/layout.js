import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/footer";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen py-[1%] flex justify-center">
      {/* Empty space on the left */}
      <div className="w-[13%]"></div>

      {/* Main content area */}
      <div className="w-[74%] flex flex-col">
        {/* Navbar within the main content area */}
        <Navbar />

        {/* Main content */}
        <main className="container mx-auto px-4 py-6">
          {children} {/* This is where the page content will be rendered */}
        </main>
        <Footer />
      </div>

      {/* Empty space on the right */}
      <div className="w-[13%]"></div>
    </div>
  );
};

export default Layout;
