import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import AboutLayout from "./Layout/aboutLayout";
import ActivityDetailsLayout from "./Layout/activityDetailsLayout";

// Pages
import About from "./pages/about";
import ActivityDetails from "./pages/activityDetails";
import EditActivity from "./pages/editActivity";
import Front from "./pages/Front";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import ArticleDetails from "./pages/ArticlesDetails";

// Components
import ChangePhotoComponent from "./components/ChangePhotoComponent";
import CommentSection from "./components/CommentSection";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  return (
    <>
      <Routes>
        {/* About section routes */}
        <Route path="/" element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
        </Route>

        {/* Activity section routes */}
        <Route path="/activity" element={<ActivityDetailsLayout />}>
          <Route path="/activity/:name" element={<ActivityDetails />} />
          <Route path="/activity/edit-activity/:name" element={<EditActivity />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      {/* Additional components to render */}
      <Front />
      <UserProfile />
      <ChangePhotoComponent />
      <CommentSection />
      <EditProfile />
      <CookieConsent />
      <ArticleDetails />
    </>
  );
};

export default App;
