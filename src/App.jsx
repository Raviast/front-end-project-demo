import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/SharedComponents/Navbar';
import Footer from './components/SharedComponents/Footer';
import ProjectsSection from './components/LandingPage/ProjectsSection';
import ClientsSection from './components/LandingPage/ClientsSection';
import ContactForm from './components/LandingPage/ContactForm';
import AboutUs from './components/LandingPage/AboutUs';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin/*"
          element={
            <AdminPanel />
          }
        />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
