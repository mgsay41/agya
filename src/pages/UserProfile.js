import React from "react";
import { Edit3, ChevronLeft, ChevronRight } from "lucide-react";
import SocialCard from "../components/SocialCard";

const UserProfile = () => {
  // Example activities data
  const activities = [
    {
      image: "https://via.placeholder.com/150",
      title: "Patterns in History, The Annual Conference 2025",
      date: "Mon, Dec 2 | 8:00 AM",
      location: "The Getty Conservation Institute (Los Angeles, USA)",
      status: "Rejected by Admin",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Rural History 2025",
      date: "Mon, Dec 2 | 8:00 AM",
      location: "The Getty Conservation Institute (Los Angeles, USA)",
      status: "Passed",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Cultural Heritage Insights",
      date: "Mon, Dec 2 | 10:00 AM",
      location: "The Getty Conservation Institute (Los Angeles, USA)",
      status: null,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl text-gray-500">S</span>
          </div>
          <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#6E2617] text-white rounded-full flex items-center justify-center">
            <Edit3 size={14} />
          </button>
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-lg font-semibold">Salma Nofal</h2>
          <p className="text-sm text-gray-600">
            UI/UX Designer | CS Graduate | Archaeology Enthusiast
          </p>
        </div>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold mb-4">Shared Activities</h3>

      {/* Scrollable Activity Cards */}
      <div className="relative">
        {/* Cards Container */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="w-64 bg-white border rounded-xl overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-32 object-cover"
                />
                {/* Status Label */}
                {activity.status && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-sm font-medium text-white rounded-lg ${
                      activity.status === "Rejected by Admin"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  >
                    {activity.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-base font-bold mb-1">{activity.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{activity.date}</p>
                <p className="text-sm text-gray-600">{activity.location}</p>
                <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                  <span>Free</span>
                  <span>•</span>
                  <span>30 Applied</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
          <ChevronLeft />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
          <ChevronRight />
        </button>
      </div>
      <h3 className="text-xl font-bold mb-4">Your Activities</h3>
      <div className="flex justify-center items-center">
        <SocialCard />
      </div>
    </div>
  );
};

export default UserProfile;
