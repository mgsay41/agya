import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Layout from "../layout";
import Home from "../pages/home";
import LatestActivities from "../components/LatestActivities";
import UserProfile from "./UserProfile";
import HelpSection from "./Help";

function Front() {
  return (
    <Layout>
      <Router>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar: Takes 20% of the width */}
          <Sidebar className="w-1/5 fixed left-0 top-0 h-full bg-gray-800 text-white" />

          {/* Main content area: Takes 60% of the width */}
          <div className="flex-grow w-3/5 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<h1 className="text-xl p-8">About Page</h1>} />
              <Route path="/activities" element={<h1 className="text-xl p-8">Activities Page</h1>} />
              <Route path="/article" element={<h1 className="text-xl p-8">Articles Page</h1>} />
              <Route path="/gallery" element={<h1 className="text-xl p-8">Gallery Page</h1>} />
              <Route path="/help" element={<HelpSection />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </div>

          {/* Latest Activities: Takes 20% of the width */}
          <LatestActivities className="w-1/5 fixed right-0 top-0 bg-gray-200" />
        </div>
      </Router>
    </Layout>
  );
}

export default Front;
