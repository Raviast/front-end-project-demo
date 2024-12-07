import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Real Trust</h1>
        <p className="text-center text-gray-700 text-lg mb-10">
          At <strong>Real Trust</strong>, we believe in creating a seamless experience for all your real estate needs. 
          With a legacy of trust and transparency, we strive to make your property dreams a reality.
        </p>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide trustworthy, innovative, and customer-centric real estate solutions that empower individuals 
              and businesses to achieve their property goals with confidence and ease.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted name in real estate by delivering exceptional service, fostering sustainable 
              communities, and building lasting relationships with our clients.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
