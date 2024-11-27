import React from "react";
// import UserProfile from "./pages/UserProfile";
// import ChangePhotoComponent from "./components/ChangePhotoComponent";
// import CommentSection from "./components/CommentSection";
// import EditProfile from "./pages/EditProfile";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutLayout from "./Layout/aboutLayout";
import ActivityDetailsLayout from "./Layout/activityDetailsLayout";
import About from "./pages/about";
import ActivityDetails from "./pages/activityDetails";
import EditActivity from "./pages/editActivity";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/activity" element={<ActivityDetailsLayout/>}>
          <Route path="/activity/:name" element={<ActivityDetails/>}/>
          <Route path="/activity/edit-activity/:name" element={<EditActivity/>}/>
        </Route>
         <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </>
  );
};

export default App;
