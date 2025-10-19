import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // keep body class synced for Tailwind's dark: utilities
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-sky-600 dark:text-sky-400">
          Tailwind v4 Demo
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-sky-600">Home</a>
          <a href="#" className="hover:text-sky-600">Docs</a>
          <a href="#" className="hover:text-sky-600">About</a>
        </nav>

        {/* Dark-Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-md border dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-2 p-2"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#" className="hover:text-sky-600">Home</a>
            <a href="#" className="hover:text-sky-600">Docs</a>
            <a href="#" className="hover:text-sky-600">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}
