import React, { useEffect, useState } from 'react';
// import ClientCard from '../SharedComponents/ClientCard'; // Import the ClientCard component

function HappyClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch clients data from the backend
  useEffect(() => {
    // Fetch projects data
    const fetchClients = async () => {
      try {
        const response = await fetch("https://react-backend-demo.vercel.app/client/allClient");
        const data = await response.json();
        console.log("::::::::::",data);
        
        setClients(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch clients");
      }
    };
    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {clients.map(client => (
            // <ClientCard key={client.id} client={client} />
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={client.image} alt={client.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-700">{client.description}</p>
              <h3 className="text-xl font-bold mt-4">{client.name}</h3>
              <p className="text-gray-500">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyClients;