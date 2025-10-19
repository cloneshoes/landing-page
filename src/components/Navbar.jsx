import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme or default to dark
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-600 dark:text-sky-400">
          My Portfolio
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-slate-700 dark:text-slate-300">
          <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
            Contact
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <i className="fa-solid fa-sun text-yellow-400"></i>
          ) : (
            <i className="fa-solid fa-moon text-slate-600"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
