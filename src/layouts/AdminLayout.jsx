import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedComponents/Navbar";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
