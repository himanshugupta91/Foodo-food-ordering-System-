import React from "react";

const AddressCard = ({ handleSelectAddress, item, showButton }) => {
  return (
    <div className="card w-full max-w-sm hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        {/* Home Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>

        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-lg text-neutral-900">Home</h3>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {item.streetAddress}, {item.postalCode}, {item.state},{" "}
            {item.country}
          </p>

          {showButton && (
            <button
              onClick={() => handleSelectAddress(item)}
              className="mt-4 w-full px-4 py-2 border-2 border-primary-500 text-primary-600 
                         rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
