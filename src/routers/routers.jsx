import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import AdminRouters from "./AdminRouters";
import SuperAdmin from "../superAdmin/SuperAdmin";

const Routers = () => {

  return (
    <>

      <Routes>

        <Route
          path="/admin/restaurant/*"
          element={<AdminRouters />}
        />
        <Route path="/super-admin/*" element={<SuperAdmin />} />
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>

  );
};

export default Routers;
