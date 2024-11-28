import React from "react";
import FeaturedArticles from "../components/FeaturedArticles";
import CommentSection from "../components/CommentSection";
function home() {
  return (
    <div className="w-fit">
      <FeaturedArticles />
      <CommentSection />
    </div>
  )
}

export default home;
