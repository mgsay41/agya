import React from "react";
import { Bookmark } from "lucide-react";

const LatestActivities = () => {
  const activities = [
    {
      title: "Social Interactions in Me...",
      link: "#",
    },
    {
      title: "Construction Health and ...",
      link: "#",
    },
    {
      title: "International Conference ...",
      link: "#",
    },
    {
      title: "European Society for the ...",
      link: "#",
    },
    {
      title: "Archaeometry conference",
      link: "#",
    },
  ];

  return (
    <div className="w-64 rounded-lg border border-gray-200 bg-white shadow">
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Latest Activities
        </h2>

        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" style={{ color: "#8B1D1D" }} />
              <button
                className="text-xs text-gray-800 hover:underline"
                onClick={() => {
                  // Add your navigation logic here if needed
                }}
              >
                {activity.title}
              </button>
            </div>
          ))}

          <div className="pt-2 text-center">
            <button className="text-sm text-gray-600 hover:underline underline">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestActivities;
