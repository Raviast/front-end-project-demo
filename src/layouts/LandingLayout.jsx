import React from "react";
import Navbar from "../components/SharedComponents/Navbar";
import Footer from "../components/SharedComponents/Footer";

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
