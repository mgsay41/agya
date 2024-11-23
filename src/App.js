import React from "react";
import Front from "./pages/Front";
import UserProfile from "./pages/UserProfile";
import ChangePhotoComponent from "./components/ChangePhotoComponent";
import CommentSection from "./components/CommentSection";
import EditProfile from "./pages/EditProfile";

const App = () => {
  return (
    <div>
      <Front />
      <UserProfile />
      <ChangePhotoComponent />
      <CommentSection />
      <EditProfile />
    </div>
  );
};

export default App;
