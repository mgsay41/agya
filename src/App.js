import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Layout from "./layout";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/home";
import LatestActivities from "./components/LatestActivities";

const App = () => {
  return (
    <Layout>
      <Router>
        <div className="flex h-screen">
          {/* Sidebar: fixed on the left */}
          <Sidebar className="fixed top-0 left-0 text-white" />

          {/* Main content area */}
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={<h1 className="text-xl p-8">About Page</h1>}
              />
              <Route
                path="/activities"
                element={<h1 className="text-xl p-8">Activities Page</h1>}
              />
              <Route
                path="/gallery"
                element={<h1 className="text-xl p-8">Gallery Page</h1>}
              />
              <Route
                path="/help"
                element={<h1 className="text-xl p-8">Help Page</h1>}
              />
              <Route path="/profile" element={<EditProfile />} />
            </Routes>
          </div>

          {/* Latest Activities: fixed on the right */}
          <LatestActivities className="fixed top-0 right-0 w-64 h-auto" />
        </div>
      </Router>
    </Layout>
  );
};

export default App;
