import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/SharedComponents/Navbar';
import Footer from './components/SharedComponents/Footer';
// import ProjectsSection from './components/LandingPage/ProjectsSection';
// import ClientsSection from './components/LandingPage/ClientsSection';
// import ContactForm from './components/LandingPage/ContactForm';
// import AboutUs from './components/LandingPage/AboutUs';
import Dashboard from './components/AdminPanel/Dashboard';
import ProjectManagement from './components/AdminPanel/ProjectManagement';
import ClientManagement from './components/AdminPanel/ClientManagement';
import ContactDetails from './components/AdminPanel/ContactDetails';
import SubscriberList from './components/AdminPanel/NewsletterSubscribers';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Protected Admin Route */}
        <Route path="/admin" element={<AdminPanel />} />
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/admin/projects" element={<ProjectManagement/>} />
        <Route path="/admin/clients" element={<ClientManagement />} />
        <Route path="/admin/contacts" element={<ContactDetails />} />
        <Route path="/admin/subscribers" element={<SubscriberList />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
