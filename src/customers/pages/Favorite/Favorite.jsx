import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const { auth } = useSelector((store) => store);

  return (
    <div className="animate-fade-in">
      <h2 className="font-display text-3xl font-bold text-neutral-800 mb-6">
        My Favorites
      </h2>

      {auth.favorites && auth.favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auth.favorites.map((item, index) => (
            <div
              key={item.id || index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <RestaurantCard data={item} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-2">
            No favorites yet
          </h3>
          <p className="text-neutral-600 mb-6">
            Save your favorite restaurants to easily find them later!
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Discover Restaurants
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorite;