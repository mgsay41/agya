import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import FilterSidebar from "../components/filterActivites";
import Activity from "../components/activities";

function Activities() {
  return (
    <div className="w-full px-36"> {/* Full-width container */}
      <Navbar />
      <div className="flex flex-row gap-4"> {/* Flex container with row direction */}
        <Sidebar /> {/* FilterSidebar on the left */}
        <Activity /> {/* Activity in the center */}
        <FilterSidebar />{/* Sidebar on the right */}
      </div>
    </div>
  );
}

export default Activities;
