import React, { useEffect, useState } from 'react'

const ProjectsSection = () => {

  const [projects, setProjects] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects data from the backend
  useEffect(() => {
    // Fetch projects data
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://react-backend-demo.vercel.app/project/allProject");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects");
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="border rounded-lg p-4 bg-white">
              <img
                src={project.image}
                alt="image"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection

