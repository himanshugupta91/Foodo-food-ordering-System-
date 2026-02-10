import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../admin/Admin";
import AdminDashboard from "../admin/Dashboard/AdminDashboard";
import SuperAdmin from "../superAdmin/SuperAdmin";
import NotFound from "../customers/pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import CreateRestaurantForm from "../admin/AddRestaurants/CreateRestaurantForm";

const AdminRouters = () => {
  const { auth, restaurant } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={

            !restaurant.usersRestaurant ? (
              <CreateRestaurantForm />
            ) : (
              <Admin />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRouters;
