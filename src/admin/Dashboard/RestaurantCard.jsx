import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRestaurant, updateRestaurantStatus } from "../../state/customers/Restaurant/restaurant.action";
import { Trash2, Edit, Power, LayoutDashboard } from "lucide-react";

export default function RestaurantCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteRestaurant = (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      dispatch(deleteRestaurant(item.id));
    }
  };

  const handleUpdateRestaurantStatus = (e) => {
    e.stopPropagation();
    dispatch(updateRestaurantStatus(item.id));
  };

  return (
    <div className="group w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 m-4">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          src={item.imageUrl || "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"}
          alt={item.name}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm border border-white/20 ${item.open ? "bg-emerald-500/90 text-white" : "bg-rose-500/90 text-white"
          }`}>
          {item.open ? "Open" : "Closed"}
        </div>

        {/* Title Content */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-display font-bold text-xl">{item.name}</h3>
          <p className="text-white/80 text-sm line-clamp-1">{item.description}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 grid grid-cols-3 gap-2">
        {/* Dashboard Button */}
        <button
          onClick={() => navigate(`/admin/restaurants/${item.id}`)}
          className="col-span-3 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2.5 rounded-xl font-semibold transition-colors shadow-sm mb-2"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </button>

        {/* Status Toggle */}
        <button
          onClick={handleUpdateRestaurantStatus}
          className={`flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-colors border ${item.open
              ? "bg-yellow-50 text-yellow-600 border-yellow-100 hover:bg-yellow-100"
              : "bg-green-50 text-green-600 border-green-100 hover:bg-green-100"
            }`}
        >
          <Power className="w-4 h-4" />
          <span className="text-xs font-medium">{item.open ? "Close" : "Open"}</span>
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDeleteRestaurant}
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span className="text-xs font-medium">Delete</span>
        </button>

        {/* Edit Button (Placeholder) */}
        <button
          onClick={() => navigate(`/admin/restaurant/details`)} // Assuming this route exists or generally guiding them
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-100 hover:bg-neutral-100 transition-colors"
        >
          <Edit className="w-4 h-4" />
          <span className="text-xs font-medium">Edit</span>
        </button>

      </div>
    </div>
  );
}
