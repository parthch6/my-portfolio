import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ContactForm from './ContactForm';

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
} from "react-icons/si";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [navbarGradient, setNavbarGradient] = useState(
    "from-blue-200/20 to-purple-200/20"
  );
  

  useEffect(() => {
    const heroColors = [
      "from-indigo-300/20 to-pink-300/20",
      "from-blue-200/20 to-purple-200/20",
      "from-cyan-200/20 to-sky-200/20",
      "from-rose-200/20 to-violet-200/20",
    ];
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * heroColors.length);
      setNavbarGradient(heroColors[random]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

 

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Navbar */}
        <nav className={`backdrop-blur-md bg-gradient-to-r ${navbarGradient} dark:from-gray-800/30 dark:to-gray-700/30 shadow-md sticky top-0 z-50 border-b border-white/20 dark:border-gray-700`}>
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-700 dark:text-white">Parth.dev</div>

            <div className="flex items-center space-x-4">
              <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition scroll-mt-16"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className="text-2xl text-gray-800 dark:text-white"
                >
                  {navOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {navOpen && (
            <ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden px-6 pb-4 space-y-2 text-center text-gray-700 dark:text-white"
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setNavOpen(false)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen relative flex flex-col justify-center items-center text-center p-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/ales-nesetril-Im7lZjxeLhg-unsplash.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>

          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h1 className="text-5xl font-bold text-white dark:text-white">Hi, I'm Parth Chaudhari</h1>
            <p className="mt-4 text-xl text-gray-200 dark:text-gray-300">
              Freelance full-stack developer | Passionate Creator
            </p>
            <a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-900 transition"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              I'm a freelancer passionate about building impactful web experiences. I specialize in React, Tailwind, etc. and love turning ideas into reality.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center p-6">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "React", icon: <SiReact className="text-blue-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "Git", icon: <SiGit className="text-orange-500" /> },
                { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
              ].map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border rounded shadow text-gray-800 dark:text-white hover:scale-105 transform transition duration-300"
                >
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="min-h-screen bg-blue-100 dark:bg-gray-700 flex flex-col justify-center items-center p-6">
            <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
                  <img src={`https://via.placeholder.com/400x200?text=Project+${num}`} alt={`Project ${num}`} className="mb-3 rounded" />
                  <h3 className="text-2xl font-semibold mb-2">Project {num}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Short description of the project goes here.</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Contact Section */}
       <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-100 dark:bg-gray-900">
  <ContactForm />
  
</section>


        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Parth.chaudhari. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
 
