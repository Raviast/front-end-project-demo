import React, { useEffect, useState } from 'react';

const NewsletterSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch subscribers data from the backend
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("https://react-backend-demo.vercel.app/subscription/all-sub");

        const data = await response.json();
        setSubscribers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch subscribers');
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Newsletter Subscribers</h2>
      <ul className="list-disc pl-5">
        {subscribers.map((subscriber) => (
          <li key={subscriber._id} className="text-gray-700">
            {subscriber.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsletterSubscribers;
