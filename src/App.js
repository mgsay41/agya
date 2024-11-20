import FeaturedArticles from "./components/FeaturedArticles";
import Footer from "./components/footer";
import LatestActivities from "./components/LatestActivities";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import SidebarGuest from "./components/sidebar-guest";
import SignUp from "./components/Signup";
import SocialCard from "./components/SocialCard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div>
      <Navbar />
      <LatestActivities />
      <FeaturedArticles />
      <Login />
      <Sidebar />
      <SignUp />
      <SidebarGuest />
      <SocialCard />
      <Footer />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/activities" element={<h1>Activities Page</h1>} />
          <Route path="/gallery" element={<h1>Gallery Page</h1>} />
          <Route path="/help" element={<h1>Help Page</h1>} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
