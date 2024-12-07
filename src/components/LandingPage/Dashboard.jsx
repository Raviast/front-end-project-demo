import React from 'react'
import ProjectsSection from "../LandingPage/ProjectsSection";
import ClientsSection from "../LandingPage/ClientsSection";
import AboutUs from "../LandingPage/AboutUs";
import ContactForm from "../LandingPage/ContactForm";
import Footer from "../SharedComponents/Footer";

const Dashboard = () => {
    return (
        <> 
           <ProjectsSection/>
           <ClientsSection/>
           <AboutUs/>
           <ContactForm/>
           <Footer/>
        </>
    )
}

export default Dashboard
