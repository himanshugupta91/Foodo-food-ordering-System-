import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordChangeSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-8 text-center animate-scale-in">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center animate-pulse">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl font-bold text-neutral-800 mb-3">
          Password Changed!
        </h1>

        {/* Message */}
        <p className="text-neutral-600 mb-8">
          Your password has been successfully changed. You can now log in with your new password.
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate("/account/login")}
          className="btn-primary w-full"
        >
          Back to Login
        </button>

        {/* Additional Link */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeSuccess;

