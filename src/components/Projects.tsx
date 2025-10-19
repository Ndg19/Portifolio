import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "Full-Stack", name: "Full-Stack App Dev" },
    { id: "web", name: "Web Devlopment" },
    { id: "ui", name: "UI/UX" },
    { id: "branding", name: "Branding" },
  ];

  const projects = [
    {
      id: 1,
      title: "Amazone Clone",
      category: "Full-Stack",
      image: "/images/Amazon-thumnail.png",
      link: "https://niguse-amazone-clone.netlify.app/",
      github: "https://github.com/Ndg19/Amazone-Clone-2025",
      description:
        "Full-featured Amazon Clone with product listings, authentication, cart management, and checkout built with modern full-stack technologies.",
    },
    {
      id: 2,
      title: "Evangadi Forum",
      category: "Full-Stack",
      image: "/images/forum-thumbnail.jpg",
      link: "https://evangadiqaforum.netlify.app/",
      github: "https://github.com/Ndg19/evangadi-forum-frontend",
      description:
        "Interactive Q&A platform with authentication, responsive UI, and dynamic backend for seamless knowledge sharing.",
    },
    {
      id: 3,
      title: "Netflix Clone",
      category: "ui",
      image: "/images/netflix-thumnail.png",
      link: "https://netflix-clone-2025-z4hh.vercel.app/",
      github: "https://github.com/Ndg19/Netflix-Clone-2025",
      description:
        "Streaming web app with movie/TV listings, search, authentication, and responsive UI, built with React and Node.js.",
    },
    {
      id: 4,
      title: "Apple React Replica",
      category: "web",
      image: "/images/project-5.jpg",
      link: "https://replicaapp.netlify.app/",
      github: "https://github.com/Ndg19/apples-React-Replica",
      description:
        "Pixel-perfect Apple website clone showcasing responsive design and interactive UI components with React.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-10 bg-gray-900">
      <div className="container mx-auto px-20">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3 inline-block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Recent Work
          </h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Explore some of my latest projects demonstrating full-stack
            development, UI/UX, and responsive design.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-2 py-2 rounded-full transition-all text-sm ${
                  activeFilter === category.id
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <span className="inline-block bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs">
                  {categories.find((cat) => cat.id === project.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
