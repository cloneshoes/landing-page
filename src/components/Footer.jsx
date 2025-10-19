export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-6 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo or Name */}
        <h3 className="text-2xl font-semibold text-sky-400">Your Name</h3>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#about" className="hover:text-sky-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-lg">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Uchenna Harrison Igwe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
