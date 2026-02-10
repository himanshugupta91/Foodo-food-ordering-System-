import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../../../state/customers/Cart/cart.action";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCartAction());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex flex-col justify-center items-center px-4 py-12 animate-fade-in">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-card-hover p-8 lg:p-12 text-center animate-scale-in">
        {/* Success Icon with Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Ripple Effect */}
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-success-200 animate-ping"></div>
            {/* Main Icon */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center shadow-glow">
              <svg
                className="w-16 h-16 text-white"
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
        </div>

        {/* Success Message */}
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
          Order Successful!
        </h1>
        <p className="text-lg text-neutral-600 mb-2">
          Thank you for choosing Foodo!
        </p>
        <p className="text-neutral-500 mb-8">
          Your order has been placed successfully. We'll send you a confirmation email shortly.
        </p>

        {/* Order Details Card */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-neutral-600">Order ID</span>
            <span className="font-mono font-semibold text-neutral-800">#{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">Status</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-success-100 text-success-700">
              <span className="w-2 h-2 rounded-full bg-success-500 mr-2 animate-pulse"></span>
              Confirmed
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/my-profile/orders")}
            className="btn-primary flex-1"
          >
            View Orders
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn-secondary flex-1"
          >
            Back to Home
          </button>
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-neutral-500">
          🎉 Have a great day!
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;

