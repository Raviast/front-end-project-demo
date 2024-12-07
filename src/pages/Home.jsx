import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/LandingPage/Dashboard";


const AdminPanel = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminPanel;
