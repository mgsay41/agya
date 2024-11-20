import React from "react";

const FeaturedArticles = () => {
  const articles = [
    {
      title: "Tracking Humans' First Footsteps in North America",
      author: "Ahmed Sayed",
      image: "article.png",
    },
    {
      title: "Site Linked to King Arthur Older Than Previously Known",
      author: "Mohamed Anwar",
      image: "article.png",
    },
    {
      title: "Middle Kingdom Tomb Discovered in Necropolis at Thebes",
      author: "Salma Nofal",
      image: "article.png",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
        Featured Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg border border-[#6E2617] bg-white shadow transition-transform hover:-translate-y-1 flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between text-center">
              <h2 className="mb-4 text-xl sm:text-2xl font-bold leading-tight text-gray-900">
                "{article.title}"
              </h2>
              <p className="mt-auto text-gray-500 text-base sm:text-lg">
                {article.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
