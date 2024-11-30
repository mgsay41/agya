import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Layout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import ActivityCard from "../components/activities";
import FeaturedArticles from "../components/FeaturedArticles";

import Gallery from "../pages/Gallery";
import LatestActivities from "../components/LatestActivities";
import UserProfile from "./UserProfile";
import HelpSection from "./Help";

function Front() {
  return (
    <Layout>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar: Takes 20% of the width */}
        <Sidebar className="w-1/5 fixed left-0 top-0 h-full bg-gray-800 text-white" />

        {/* Main content area: Takes 60% of the width */}
        <div className="flex-grow w-3/5 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<About/>}
            />
            <Route
              path="/activities"
              element={<ActivityCard/>}
            />
            <Route
              path="/article"
              element={<FeaturedArticles/>}
            />
            <Route
              path="/gallery"
              element={<Gallery/>}
            />
            <Route path="/help" element={<HelpSection />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>

        {/* Latest Activities: Takes 20% of the width */}
        <LatestActivities className="w-1/5 fixed right-0 top-0 bg-gray-200" />
      </div>
    </Layout>
  );
}

export default Front;
