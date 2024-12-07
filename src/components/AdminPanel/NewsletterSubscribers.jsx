import React, { useEffect, useState } from 'react';
import axios from '../../services/api';

const NewsletterSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios.get('/subscribers').then((response) => {
      setSubscribers(response.data);
    });
  }, []);

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
