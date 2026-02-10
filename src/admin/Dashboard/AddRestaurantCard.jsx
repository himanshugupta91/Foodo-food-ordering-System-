import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const AddRestaurantCard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/admin/add-restaurant")}
        className="group w-full max-w-sm h-full min-h-[340px] bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-300 hover:border-primary-500 hover:bg-primary-50/30 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <PlusCircle className="w-8 h-8 text-neutral-400 group-hover:text-primary-600 transition-colors" />
        </div>
        <h3 className="font-display text-xl font-bold text-neutral-600 group-hover:text-primary-700 transition-colors">
          Add New Restaurant
        </h3>
        <p className="text-sm text-neutral-400 mt-2 max-w-[200px] group-hover:text-primary-600/70">
          Create a new restaurant profile and start managing your menu.
        </p>
      </button>
    </div>
  );
};

export default AddRestaurantCard;
