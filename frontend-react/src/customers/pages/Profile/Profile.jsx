import React from "react";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import UsersAddresses from "../UsersAdresses/UsersAddresses";
import Favorite from "../Favorite/Favorite";
import UserProfile from "./UserProfile";
import CustomerEvents from "./CustomerEvents";
import Notifications from "./Notifications";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-neutral-800 mb-8">
          My Profile
        </h1>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <ProfileNavigation />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/address" element={<UsersAddresses />} />
              <Route path="/favorites" element={<Favorite />} />
              <Route path="/payments" element={<Orders />} />
              <Route path="/events" element={<CustomerEvents />} />
              <Route path="/notification" element={<Notifications />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
