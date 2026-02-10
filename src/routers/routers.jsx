import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import Admin from "../admin/Admin";
import AdminDashboard from "../admin/Dashboard/AdminDashboard";
import SuperAdmin from "../superAdmin/SuperAdmin";
import { useSelector } from "react-redux";
import NotFound from "../customers/pages/NotFound/NotFound";
import IngredientsList from "../data/Demo";
import CreateRestaurantForm from "../admin/AddRestaurants/CreateRestaurantForm";
import AdminRouters from "./AdminRouters";

const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <>

      <Routes>

        <Route
          path="/admin/restaurant/*"
          element={<AdminRouters />}
        />
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>

  );
};

export default Routers;
