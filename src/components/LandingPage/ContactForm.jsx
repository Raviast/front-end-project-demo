import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    areaCity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      areaCity: ''
    });
  };

  return (    
    <div className="bg-blue-500 p-8 rounded-lg w-1/2 left">
      <h2 className="text-white text-2xl font-bold mb-4">Get a Free Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4"
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4"
        />
        <input
          type="text"
          name="areaCity"
          placeholder="Area, City"
          value={formData.areaCity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
}

export default ContactForm;