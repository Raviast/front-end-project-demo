import React, { useState } from 'react';
import axios from '../../services/api';

const ClientManagement = () => {
  const [clientData, setClientData] = useState({
    name: '',
    designation: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setClientData({ ...clientData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', clientData.name);
    formData.append('designation', clientData.designation);
    formData.append('description', clientData.description);
    formData.append('image', clientData.image);

    axios.post('/clients', formData).then(() => {
      alert('Client added successfully!');
      setClientData({ name: '', designation: '', description: '', image: null });
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gray-100 rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Client</h2>
      <input
        type="text"
        name="name"
        value={clientData.name}
        onChange={handleChange}
        placeholder="Client Name"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="designation"
        value={clientData.designation}
        onChange={handleChange}
        placeholder="Client Designation"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="description"
        value={clientData.description}
        onChange={handleChange}
        placeholder="Client Description"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="file"
        onChange={handleImageUpload}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Client
      </button>
    </form>
  );
};

export default ClientManagement;
