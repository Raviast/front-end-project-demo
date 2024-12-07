import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/AdminPanel/Dashboard";
import ProjectManagement from "../components/AdminPanel/ProjectManagement";
import ClientManagement from "../components/AdminPanel/ClientManagement";
import ContactDetails from "../components/AdminPanel/ContactDetails";
import SubscriberList from "../components/AdminPanel/NewsletterSubscribers";

const AdminPanel = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="projects" element={<ProjectManagement />} />
      <Route path="clients" element={<ClientManagement />} />
      <Route path="contacts" element={<ContactDetails />} />
      <Route path="subscribers" element={<SubscriberList />} />
    </Routes>
  );
};

export default AdminPanel;
