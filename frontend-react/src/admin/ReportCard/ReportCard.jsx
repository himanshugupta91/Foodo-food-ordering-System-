import React from "react";

const ReportCard = ({ title, icon, value, isGrow, growValue }) => {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-neutral-600 mb-3">{title}</p>
          <p className="font-bold text-3xl text-neutral-900 mb-3">{value}K</p>
          <div className={`flex items-center space-x-2 ${isGrow !== false ? "text-green-600" : "text-red-500"}`}>
            <span className="font-semibold text-sm">{growValue}%</span>
            {isGrow !== false ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
