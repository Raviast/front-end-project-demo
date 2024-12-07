import React from 'react';

function ClientCard({ client }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img src={client.imageUrl} alt={client.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <p className="text-gray-700">{client.description}</p>
      <h3 className="text-xl font-bold mt-4">{client.name}</h3>
      <p className="text-gray-500">{client.designation}</p>
    </div>
  );
}

export default ClientCard;