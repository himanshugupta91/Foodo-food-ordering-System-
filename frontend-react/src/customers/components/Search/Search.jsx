import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { topMeals } from "../../../data/topMeals";
import { PopularCuisines } from "./PopularCuisines";
import SearchDishCard from "./SearchDishCard";
import { useDispatch, useSelector } from "react-redux";
import { searchMenuItem } from "../../../state/customers/Menu/menu.action";

const Search = () => {
  const dispatch = useDispatch();
  const { menu, auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchMenu = (keyword) => {
    setSearchTerm(keyword);
    dispatch(searchMenuItem({ keyword, jwt: auth.jwt || jwt }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-8 px-4 sm:px-6 lg:px-20">
      {/* Search Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-neutral-800 mb-2 text-center">
          Find Your Favorite Food
        </h1>
        <p className="text-neutral-600 text-center mb-8">
          Search from thousands of delicious dishes
        </p>

        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 z-10" />
          <input
            onChange={(e) => handleSearchMenu(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-neutral-200 rounded-2xl outline-none
                       focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all
                       text-neutral-800 placeholder-neutral-400 shadow-sm"
            type="text"
            placeholder="Search for dishes, cuisines, restaurants..."
            value={searchTerm}
          />
        </div>
      </div>

      {/* Popular Cuisines Section */}
      {!searchTerm && (
        <div className="max-w-7xl mx-auto mb-12 animate-fade-in">
          <h2 className="font-display text-3xl font-bold text-neutral-800 mb-6">
            Popular Cuisines
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {topMeals.slice(0, 12).map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PopularCuisines image={item.image} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchTerm && (
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-neutral-800">
              Search Results
            </h2>
            <span className="text-neutral-600 text-sm">
              {menu.search.length} {menu.search.length === 1 ? "result" : "results"} found
            </span>
          </div>

          {menu.search.length > 0 ? (
            <div className="space-y-4">
              {menu.search.map((item, index) => (
                <div
                  key={item.id || index}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <SearchDishCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                <SearchIcon sx={{ fontSize: "3rem" }} className="text-neutral-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-2">
                No results found
              </h3>
              <p className="text-neutral-600">
                Try searching for something else or browse our popular cuisines
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

