import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/customers/Cart/cart.action";
import { useNavigate } from "react-router-dom";

const SearchDishCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddItemToCart = () => {
    const data = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        menuItemId: item.id,
        quantity: 1,
      },
    };
    dispatch(addItemToCart(data));
  };

  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Restaurant Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-100">
        <button
          onClick={() =>
            navigate(
              `/restaurant/${item.restaurant.address.city}/${item.restaurant.name}/${item.restaurant.id}`
            )
          }
          className="flex items-center space-x-2 group"
        >
          <span className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
            {item.restaurant?.name}
          </span>
          <svg
            className="w-4 h-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dish Content */}
      <div className="p-6">
        <div className="flex justify-between gap-6">
          {/* Dish Info */}
          <div className="flex-1 space-y-3">
            <h3 className="font-display text-xl font-bold text-neutral-800">
              {item.name}
            </h3>
            <p className="text-2xl font-bold text-primary-600">₹{item.price}</p>
            <p className="text-neutral-600 text-sm line-clamp-2">
              {item.description}
            </p>

            {/* Add to Cart Button (Mobile) */}
            <button
              onClick={handleAddItemToCart}
              className="btn-primary sm:hidden w-full"
            >
              Add to Cart
            </button>
          </div>

          {/* Dish Image & Action */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                src={item.images[0]}
                alt={item.name}
              />
            </div>
            {/* Add to Cart Button (Desktop) */}
            <button
              onClick={handleAddItemToCart}
              className="hidden sm:block btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDishCard;

