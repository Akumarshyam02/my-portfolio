import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-8 min-h-screen"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
  I’m   <span className="text-indigo-600 font-semibold">Shyam Kumar</span>, a passionate full-stack web developer who loves to build beautiful and performant websites.  
  I specialize in modern frontend technologies like <strong>React.js</strong> and <strong>Tailwind CSS</strong>, and also have hands-on experience in backend development using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.  
  My goal is to create seamless, responsive, and scalable web applications from front to back.
</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I enjoy bringing ideas to life with modern JavaScript frameworks like React and Next.js.
            </p>
          </div>



          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Backend</h3>
  <p className="text-gray-600 dark:text-gray-300">
    I craft secure and scalable backend systems using Node.js, Express, and MongoDB, ensuring robust APIs and smooth data handling.
  </p>
</div>


          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">UI/UX</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My focus is on building interfaces that are both user-friendly and aesthetically pleasing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I work with tools like VS Code, GitHub, Figma, Vite, and DevTools for efficient development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
