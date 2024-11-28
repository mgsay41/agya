import React from "react";
import image1 from "../images/image.png"
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi2";
// Reusable Activity Card Component

const ActivityCard = ({ title, date, location, price, applicants, image }) => (
  <div className="border rounded-lg shadow-md overflow-hidden w-full">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex items-center text-sm text-gray-500 space-x-2 my-2">
        <span>{date}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
        <GrLanguage className="w-4 h-4 text-green-600 size-20" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
        <HiOutlineTicket className="w-4 h-4 text-green-600" />
        <span>{price}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 space-x-2">
        <MdOutlinePersonOutline className="w-4 h-4 text-green-600" />
        <span>{applicants} Applied</span>
      </div>
    </div>
  </div>
);

// Categories Filter Buttons
const Categories = () => (
  <div className="flex flex-wrap gap-2 mb-4">
    {[
      "All Activities",
      "Workshops",
      "Publications",
      "Conferences & Talks",
      "Events",
      "Interviews",
      "Competitions",
    ].map((category, index) => (
      <button
        key={index}
        className="bg-main text-white text-sm px-6 py-2 rounded-[10px] hover:bg-opacity-90 transition"
      >
        {category}
      </button>
    ))}
  </div>
);

// Main Activities Component
const Activity = () => {
  const activitiesData = [
    {
      id: 1,
      title: "Patterns in History, The Annual Conference 2025",
      date: "Mon, Dec 2 | 8:00 AM",
      location: "The Getty Conservation Institute (Los Angeles, USA)",
      price: "Free",
      applicants: 30,
      image: image1, // Replace with actual image URL
    },
    {
      id: 2,
      title: "AGYA Literary Salon: Arab and German Literary Cultures",
      date: "Mon, Dec 2 | 8:00 AM",
      location: "The Getty Conservation Institute (Los Angeles, USA)",
      price: "Free",
      applicants: 30,
      image: "https://via.placeholder.com/300x150", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-col px-8 py-4">
      {/* Latest Activities Section */}
      <h2 className="text-xl font-semibold mb-4">Latest Activities</h2>
      <div className="grid grid-cols-3 gap-4">
        {activitiesData.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>

      {/* All Activities Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4">All Activities</h2>
      <Categories />
      <div className="mt-6 grid grid-cols-2 gap-4">
        {activitiesData.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
