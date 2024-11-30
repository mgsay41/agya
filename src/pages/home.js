import React from "react";
import FeaturedArticles from "../components/FeaturedArticles";
import SocialCard from "../components/SocialCard";
import BlurredCard from "../components/BlurredCard";

function Home() {
  const socialCards = [1, 2, 3, 4, 5, 6, 7]; // Example array, you can replace it with real data

  return (
    <div className="w-fit">
      <BlurredCard />
      <FeaturedArticles />
      <div className="w-[90%] mx-auto">
        <h1 className="mb-7 text-left text-lg text-black">News Feed</h1>

        {/* Mapping through SocialCards and displaying them stacked */}
        <div className="space-y-6"> {/* Adds space between each card */}
          {socialCards.map((card, index) => (
            <SocialCard key={index} /> // Replace with actual data if necessary
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
