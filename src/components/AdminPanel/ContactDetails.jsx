import React, { useEffect, useState } from 'react';
import axios from '../../services/api';

const ContactDetails = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/contacts').then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Contact Form Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border p-2">{contact.fullName}</td>
              <td className="border p-2">{contact.email}</td>
              <td className="border p-2">{contact.mobile}</td>
              <td className="border p-2">{contact.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetails;
