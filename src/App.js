import React from "react";
import Front from "./pages/Front";
import UserProfile from "./pages/UserProfile";
import ChangePhotoComponent from "./components/ChangePhotoComponent";
import CommentSection from "./components/CommentSection";
import EditProfile from "./pages/EditProfile";
import ArticleDetails from "./pages/ArticlesDetails";


const App = () => {
  return (
    <div>
      <ArticleDetails/>
      {/* <Front />
      <UserProfile />
      <ChangePhotoComponent />
      <CommentSection />
      <EditProfile /> */}
    </div>
  );
};

export default App;
