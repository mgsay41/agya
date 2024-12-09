import React from "react";

const Help = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-white shadow-lg p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Samia Nidal</h2>
            <p className="text-sm text-gray-500">
              UCLA Graduate | Cultural & Archaeology Enthusiast
            </p>
          </div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li><a href="#" className="text-green-600 hover:underline">Home</a></li>
            <li><a href="#" className="text-green-600 hover:underline">About</a></li>
            <li><a href="#" className="text-green-600 hover:underline">Articles</a></li>
            <li><a href="#" className="text-green-600 hover:underline">Gallery</a></li>
            <li><a href="#" className="text-green-600 hover:underline">Help</a></li>
            <li><a href="#" className="text-green-600 hover:underline">Profile</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Help Section */}
      <main className="w-3/4 bg-white shadow-lg p-6 rounded-lg ml-6">
        <h1 className="text-2xl font-bold mb-4">Help</h1>

        {/* How to Use Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">How to use Climate Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded-md text-center">
              <h3 className="font-bold text-lg">1. Search and Filter</h3>
              <p className="text-sm text-gray-600">
                Use the search bar and filters to find specific archaeological topics or areas of interest.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md text-center">
              <h3 className="font-bold text-lg">2. Explore and Learn</h3>
              <p className="text-sm text-gray-600">
                Dive into detailed articles, case studies, and multimedia content to enhance your knowledge.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md text-center">
              <h3 className="font-bold text-lg">3. Interact and Engage</h3>
              <p className="text-sm text-gray-600">
                Participate in forums, webinars, and events to connect with other enthusiasts and experts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">FAQs</h2>
          <ul className="space-y-4">
            {[
              "What is this platform about?",
              "How can I contribute to the platform?",
              "Is the platform open to everyone, or only professionals?",
              "How can the platform help in the conservation of historical buildings?",
              "Can I collaborate with others on conservation projects through this platform?",
              "What types of articles or content can I publish on the platform?",
            ].map((question, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span>
                <p className="text-gray-700">{question}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Have a Question</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter an accessible e-mail"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Help;
