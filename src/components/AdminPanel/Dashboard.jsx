import React, { useEffect, useState } from 'react';


const Dashboard = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch subscribers from the backend
  useEffect(() => {
    // fetch subscribers data 
    const fetchSubscriber = async () => {
      try {
        const response = await fetch('https://react-backend-demo.vercel.app/subscription/all-sub');
        const data = await response.json();
        setSubscribers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchSubscriber();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  

  return (
    <div className="p-8 bg-gray-100 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Newsletter Subscribers</h2>
      <ul className="list-disc pl-5">
        {subscribers.map((subscriber) => (
          <li key={subscriber._id} className="text-gray-700">
            {subscriber.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
