import React from "react";
import { useDispatch } from "react-redux";
import { deleteEventAction } from "../../state/customers/Restaurant/restaurant.action";

const EventCard = ({ item, isCustomer }) => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(deleteEventAction(item.id));
  };

  return (
    <div className="card overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-72">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
          {item.restaurant.name}
        </h3>
        <p className="text-neutral-600 mb-4">{item.name}</p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-neutral-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </div>

          <div className="flex items-center text-sm text-primary-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Starts: {item.startedAt}
          </div>

          <div className="flex items-center text-sm text-red-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ends: {item.endsAt}
          </div>
        </div>

        {!isCustomer && (
          <button
            onClick={handleDeleteEvent}
            className="mt-4 w-full px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100
                     transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Delete Event</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
