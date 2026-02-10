import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/customers/Cart/cart.action";
import { categorizedIngredients } from "../../util/CategorizeIngredients";

const MenuItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleCheckboxChange = (itemName) => {
    if (selectedIngredients.includes(itemName)) {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== itemName)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, itemName]);
    }
  };

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const data = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        menuItemId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };
    dispatch(addItemToCart(data));
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 lg:p-6 flex items-start justify-between hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-start space-x-4 flex-1">
          {/* Image */}
          <img
            className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-lg flex-shrink-0"
            src={item.images[0]}
            alt={item.name}
          />

          {/* Content */}
          <div className="flex-1 text-left space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg lg:text-xl text-neutral-900 pr-4">
                {item.name}
              </h3>
              <svg
                className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <p className="text-primary-600 font-semibold text-lg">
              ₹{item.price}
            </p>
            <p className="text-neutral-600 text-sm line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-neutral-50">
          <form onSubmit={handleAddItemToCart} className="p-4 lg:p-6">
            {/* Ingredients */}
            <div className="space-y-6">
              {Object.keys(categorizedIngredients(item?.ingredients))?.map(
                (category) => (
                  <div key={category}>
                    <h4 className="font-semibold text-neutral-800 mb-3">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {categorizedIngredients(item?.ingredients)[category].map(
                        (ingredient) => (
                          <label
                            key={ingredient.name}
                            className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-white transition-colors ${!ingredient.inStoke
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={selectedIngredients.includes(
                                ingredient.name
                              )}
                              onChange={() =>
                                handleCheckboxChange(ingredient.name)
                              }
                              disabled={!ingredient.inStoke}
                              className="w-5 h-5 text-primary-600 border-neutral-300 rounded 
                                       focus:ring-primary-500 focus:ring-2 disabled:opacity-50"
                            />
                            <span className="text-neutral-700 text-sm">
                              {ingredient.name}
                              {!ingredient.inStoke && (
                                <span className="text-red-500 ml-2 text-xs">
                                  (Out of stock)
                                </span>
                              )}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <button
                type="submit"
                disabled={!item.available}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${item.available
                    ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg"
                    : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                  }`}
              >
                {item.available ? "Add To Cart" : "Out of stock"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
