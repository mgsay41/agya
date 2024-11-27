import React from "react";
import Front from "./pages/Front";
import UserProfile from "./pages/UserProfile";
import ChangePhotoComponent from "./components/ChangePhotoComponent";
import CommentSection from "./components/CommentSection";
import EditProfile from "./pages/EditProfile";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  return (
    <div>
      <Front />
      <UserProfile />
      <ChangePhotoComponent />
      <CommentSection />
      <EditProfile />
      <CookieConsent />
    </div>
  );
};

export default App;
