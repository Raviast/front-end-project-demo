// import React, { useState } from 'react';
// import axios from '../../services/api';

// const ClientManagement = () => {
//   const [clientData, setClientData] = useState({
//     name: '',
//     designation: '',
//     description: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setClientData({ ...clientData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     setClientData({ ...clientData, image: "https://th.bing.com/th/id/OIP.t1kKfJMi8BB1w60acyuk9wHaLH?w=127&h=191&c=7&r=0&o=5&pid=1.7" });
//   };

//   const handleSubmit = (e) => {

//     e.preventDefault();
//     clientData.image = "https://th.bing.com/th/id/OIP.t1kKfJMi8BB1w60acyuk9wHaLH?w=127&h=191&c=7&r=0&o=5&pid=1.7";

//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
   
//     const raw = JSON.stringify(clientData);

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("https://react-backend-demo.vercel.app/client/addClient", requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         alert('Client added successfully!');
//         setClientData({ name: '',
//           designation: '',
//           description: '',
//           image: null,});
//       })
//       .catch((error) => {
//         console.error(error)
//         alert('Something went wrong while adding client, please try again');
//       });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-8 bg-gray-100 rounded shadow-md max-w-md mx-auto"
//     >
//       <h2 className="text-xl font-bold mb-4">Add Client</h2>
//       <input
//         type="text"
//         name="name"
//         value={clientData.name}
//         onChange={handleChange}
//         placeholder="Client Name"
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <input
//         type="text"
//         name="designation"
//         value={clientData.designation}
//         onChange={handleChange}
//         placeholder="Client Designation"
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <textarea
//         name="description"
//         value={clientData.description}
//         onChange={handleChange}
//         placeholder="Client Description"
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <input
//         type="file"
//         onChange={handleImageUpload}
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded"
//       >
//         Add Client
//       </button>
//     </form>
//   );
// };

// export default ClientManagement;


import React, { useState } from 'react';
import axios from '../../services/api'; // Make sure this is set up correctly

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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file); // backend should expect 'image' key

    try {
      const res = await fetch("https://react-backend-demo.vercel.app/client/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setClientData((prev) => ({ ...prev, image: data.imageUrl })); // assuming `imageUrl` is returned
    } catch (err) {
      console.error("Image upload failed", err);
      alert("Image upload failed. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://react-backend-demo.vercel.app/client/addClient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        alert("Client added successfully!");
        setClientData({
          name: '',
          designation: '',
          description: '',
          image: null,
        });
      } else {
        throw new Error("Failed to add client");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong while adding the client.");
    }
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
        accept="image/*"
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
