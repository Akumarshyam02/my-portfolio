import { Github, ExternalLink } from "lucide-react";
import React from 'react';
const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio website built with React and Tailwind CSS to showcase my work and skills.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "Task Manager API",
    description: "A RESTful API built with Node.js and MongoDB for managing daily tasks with user authentication.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/yourname/task-manager-api",
  },
  {
    title: "Task Manager API",
    description: "A RESTful API built with Node.js and MongoDB for managing daily tasks with user authentication.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/yourname/task-manager-api",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Some of the projects I’ve worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                    <Github size={18} /> Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
