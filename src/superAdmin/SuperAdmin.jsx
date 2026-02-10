import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSideBar";
import Customers from "./SuperAdminCustomerTable/Customers";
import SuperAdminRestaurant from "./Restaurants/SuperAdminRestaurant";
import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";

const SuperAdmin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="flex">
        {/* Sidebar */}
        <SuperAdminSidebar />

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-[1400px] mx-auto p-4 lg:p-8">
            <Routes>
              <Route path="/customers" element={<Customers />} />
              <Route path="/restaurants" element={<SuperAdminRestaurant />} />
              <Route path="/restaurant-request" element={<RestaurantRequest />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdmin;
