import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://react-backend-demo.vercel.app/contact/addContact", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert('Contact details added successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          city: ''
        });
      })
      .catch((error) => {
        console.error(error)
        alert('Something went wrong while adding contact details, please try again');
      });

  };

  return (
    <div className="bg-blue-500 p-8 rounded-lg w-1/2 mx-auto">
      <h2 className="text-white text-2xl font-bold mb-4">Get a Free Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
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
          name="city"
          placeholder="Area, City"
          value={formData.city}
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