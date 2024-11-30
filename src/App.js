import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import AboutLayout from "./Layout/aboutLayout";
import ActivityDetailsLayout from "./Layout/activityDetailsLayout";

// Pages
import About from "./pages/about";
import Activities from "./pages/Activites";
import ActivityDetails from "./pages/activityDetails";
import EditActivity from "./pages/editActivity";
import Front from "./pages/Front";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import ArticleDetails from "./pages/ArticlesDetails";

// Components
import ChangePhotoComponent from "./components/ChangePhotoComponent";
import CommentSection from "./components/CommentSection";
import CookieConsent from "./components/CookieConsent";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div>
      <Front /> 
    </div>
    // <>
    //   <Routes>
    //     {/* About section routes */}
    //     <Route path="/" element={<AboutLayout />}>
    //       <Route path="/about" element={<About />} />
    //     </Route>

    //     {/* Activity section routes */}
    //     <Route path="/activity" element={<ActivityDetailsLayout />}>
    //       <Route path="/activity" element={<ActivityDetails />} />
    //       <Route path="/activity/edit-activity/:name" element={<EditActivity />} />
    //     </Route>

    //     {/* article secrion routes*/}
    //     <Route path="/article" element={<ArticleDetails />} />

    //     {/* Fallback route */}
    //     <Route path="*" element={<Navigate to={"/"} />} />
    //   </Routes>

    // {/* Additional components to render */}
    //   <Front />
    //   <UserProfile />
    //   <ChangePhotoComponent />
    //   <CommentSection />
    //   <EditProfile />
    //   <CookieConsent />
    //   <ArticleDetails />
    // </>
  );
};

export default App;
