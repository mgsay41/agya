import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen text-main-font">
      {/* Left Section: Login Form */}
      <div className="w-1/2 bg-background flex flex-col justify-center px-12 rounded-l-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="hannah.green@test.com"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-main"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-main"
          />
          <p className="text-sm text-main mt-2">
            <a href="#" className="hover:underline">
              Forgot your Password?
            </a>
          </p>
        </div>

        {/* Login Button */}
        <button className="w-full bg-main text-secondary-font py-3 rounded-md font-semibold hover:bg-opacity-90">
          Log in
        </button>

        {/* Sign-Up Link */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-main hover:underline font-bold">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section: Image */}
      <div
        className="w-1/2 relative bg-cover bg-center rounded-r-lg"
        style={{
          backgroundImage: `url('/login.png')`,
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-secondary-font bg-main w-8 h-8 flex items-center justify-center rounded-full text-lg hover:bg-opacity-90"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Login;
