import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex flex-col justify-center items-center px-4 animate-fade-in">
      {/* Animated 404 Illustration */}
      <div className="mb-8 animate-bounce">
        <div className="relative">
          <div className="text-9xl font-display font-extrabold text-primary-100">
            404
          </div>
          <div className="absolute inset-0 text-9xl font-display font-extrabold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            404
          </div>
        </div>
      </div>

      {/* Food Icon */}
      <div className="mb-6 animate-float">
        <svg
          className="w-24 h-24 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      {/* Message */}
      <h1 className="font-display text-4xl lg:text-5xl font-bold text-neutral-800 mb-4 text-center">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-neutral-600 mb-8 text-center max-w-md">
        Looks like this page went on a food run and didn't come back.
        Let's get you back to something delicious!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/")}
          className="btn-primary"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate("/search")}
          className="btn-secondary"
        >
          Search Restaurants
        </button>
      </div>

      {/* Popular Links */}
      <div className="mt-12 text-center">
        <p className="text-sm text-neutral-500 mb-4">Popular pages:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/cart")}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline"
          >
            My Cart
          </button>
          <button
            onClick={() => navigate("/my-profile")}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline"
          >
            My Profile
          </button>
          <button
            onClick={() => navigate("/my-profile/orders")}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline"
          >
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

