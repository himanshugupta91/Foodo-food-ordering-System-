import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../../state/customers/Cart/cart.action";
import { Plus, Minus, Trash2 } from "lucide-react";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity === 1) {
      handleRemoveCartItem();
      return;
    }
    const data = { cartItemId: item.id, quantity: item.quantity + value };
    dispatch(updateCartItem({ data, jwt: auth.jwt || jwt }));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100">
      <div className="flex gap-4">
        {/* Food Image */}
        <div className="flex-shrink-0">
          <img
            className="w-24 h-24 rounded-xl object-cover"
            src={item.food.images[0]}
            alt={item.food.name}
          />
        </div>

        {/* Food Info & Actions */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Name & Price Row */}
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-display font-semibold text-neutral-900 text-lg line-clamp-1">
                {item.food.name}
              </h3>
              <p className="font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-lg">₹{item.totalPrice}</p>
            </div>
            {/* Ingredients Chips */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1 mb-2">
                {item.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-[10px] font-medium bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            )}
          </div>


          {/* Quantity Controls & Remove */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-3 bg-neutral-50 rounded-full px-1 py-1 border border-neutral-100">
              <button
                onClick={() => handleUpdateCartItem(-1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-red-50 text-neutral-600 hover:text-red-500 transition-colors shadow-sm"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-6 text-center font-bold text-neutral-800">
                {item.quantity}
              </span>
              <button
                onClick={() => handleUpdateCartItem(1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-green-50 text-neutral-600 hover:text-green-500 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={handleRemoveCartItem}
              className="group flex items-center gap-1 text-xs font-semibold text-neutral-400 hover:text-red-500 transition-colors bg-transparent px-2 py-1 rounded-lg hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
              <span className="group-hover:underline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
