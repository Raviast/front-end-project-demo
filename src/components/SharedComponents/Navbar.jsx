import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles for the toast notifications

function Navbar() {
  const API_HOST = 'https://react-backend-demo.vercel.app'; // Corrected to use REACT_APP_
  const location = useLocation();

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.warn("Please enter email"); // Display warning toast
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({ email });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch(`${API_HOST}/subscription/create-sub`, requestOptions);

      if (response.ok) {
        const result = await response.json(); // Assuming the server sends JSON response
        if (result.message !== 'user have been subscribed') {
          toast.warn(result.message); // Display warning toast with the server message
        } else {
          toast.success(result.message || 'Subscribed successfully!'); // Display success toast
        }
        setEmail(''); // Clear email input after success
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while subscribing, please try again'); // Error toast
    }
  };

  return (
    <>
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex space-x-4">
            {location.pathname.startsWith('/admin') ? (
              <>
                <Link to="/admin" className="hover:text-gray-300">
                  Dashboard
                </Link>
                <Link to="/admin/projects" className="hover:text-gray-300">
                  Projects
                </Link>
                <Link to="/admin/clients" className="hover:text-gray-300">
                  Clients
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
                <Link to="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </>
            )}
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="border text-black border-gray-300 p-2 rounded-md"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>
      <ToastContainer /> {/* ToastContainer should be inside the component */}
    </>
  );
}

export default Navbar;
