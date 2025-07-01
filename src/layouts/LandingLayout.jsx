import React from "react";
import Navbar from "../components/SharedComponents/Navbar";
import Footer from "../components/SharedComponents/Footer";

const LandingLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
