import { Code, Database, Wrench, Cpu } from "lucide-react";
import React from 'react';
const Skills = () => {

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code className="mx-auto h-10 w-10 text-indigo-500 mb-4" />,
    description:
      "HTML, CSS, JavaScript, React.js, Tailwind CSS, Next.js, Responsive Design",
  },
  {
    title: "Backend Development",
    icon: <Database className="mx-auto h-10 w-10 text-indigo-500 mb-4" />,
    description:
      "Node.js, Express.js, MongoDB, REST APIs, Authentication & Authorization",
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench className="mx-auto h-10 w-10 text-indigo-500 mb-4" />,
    description:
      "Git, GitHub, Vercel, Netlify, Postman, VS Code",
  },
];

// Technical skills as tags
const technicalSkills = [
  "HTML", "CSS", "JavaScript", "C", "C++", "Python", "React", "Node.js", "Express.js",
  "MongoDB", "Git", "GitHub", "Tailwind CSS", "Bootstrap", "Vite", "Next.js"
];
  return (
   <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          My Skills
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Skills as tags */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-indigo-500 w-6 h-6" />
            <h3 className="text-xl font-semibold text-indigo-600">Technical Skills</h3>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {technicalSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-indigo-700 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
