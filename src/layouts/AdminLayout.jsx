import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedComponents/Navbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="admin-content">
        <Outlet className="flex-grow"/>
      </div>
    </div>
  );
};

export default AdminLayout;
