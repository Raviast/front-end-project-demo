import React from 'react';
import ClientCard from '../SharedComponents/ClientCard'; // Import the ClientCard component

function HappyClients() {
  // const clients = [
  //   {
  //     id: 1,
  //     name: 'Rowhan Smith',
  //     designation: 'CEO, Foreclosure',
  //     imageUrl: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg', // Replace with actual image URL
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Shipra Kayak',
  //     designation: 'Brand, Designer',
  //     imageUrl: 'https://th.bing.com/th/id/OIP.v6CfzXC01F9kSqwXnd5YTAHaM4?rs=1&pid=ImgDetMain', // Replace with actual image URL
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     id: 3,
  //     name: 'John Lepore',
  //     designation: 'CEO, Foreclosure',
  //     imageUrl: 'https://th.bing.com/th/id/OIP.ZP-E8ZFH11wb1XSm0dn-5wHaJQ?w=153&h=191&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     id: 4,
  //     name: 'Marry Freeman',
  //     designation: 'Marketting Manager at OLX',
  //     imageUrl: 'https://th.bing.com/th/id/OIP.t1kKfJMi8BB1w60acyuk9wHaLH?w=127&h=191&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     id: 5,
  //     name: 'Lucy',
  //     designation: 'Sales Manager at Alibaba',
  //     imageUrl: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg', // Replace with actual image URL
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   // Add more clients here
  // ];
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch clients data from the backend
  useEffect(() => {
    // Fetch projects data
    const fetchClinets = async () => {
      try {
        const response = await fetch("https://react-backend-demo.vercel.app//client/allClient");
        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch clients");
      }
    };
    fetchClinets();
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
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyClients;