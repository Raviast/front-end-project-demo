import React, { useState } from 'react';

const ProjectManagement = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectData({ ...projectData, [name]: value });
  };

  const handleImageUpload = (e) => {

    setProjectData({ ...projectData, image: "https://th.bing.com/th/id/OIP.HyPO0GQqnsGoMcauAHz_MQHaE7?rs=1&pid=ImgDetMain" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    projectData.image = "https://th.bing.com/th/id/OIP.HyPO0GQqnsGoMcauAHz_MQHaE7?rs=1&pid=ImgDetMain";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(projectData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://react-backend-demo.vercel.app/project/addProject", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert('Project added successfully!');
        setProjectData({ name: '', description: '', image: null });
      })
      .catch((error) => {
        console.error(error)
        alert('Something went wrong while adding project, please try again');
      });

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gray-100 rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <input
        type="text"
        name="name"
        value={projectData.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="description"
        value={projectData.description}
        onChange={handleChange}
        placeholder="Project Description"
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
        Add Project
      </button>
    </form>
  );
};

export default ProjectManagement;
