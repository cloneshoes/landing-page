
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-inter">
      <Navbar />
      {/* ===== HERO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
          Hi, I’m <span className="text-sky-600 dark:text-sky-400">Uche Igwe</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-4">
          Frontend Developer • React • Tailwind CSS
        </p>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          I design and build beautiful, responsive websites and web applications.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition">
            Hire Me
          </button>
          <button className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            View Projects
          </button>
        </div>
      </section>

      {/* ===== ABOUT ME SECTION ===== */}
      <About />

        {/* ===== PROJECTS SECTION ===== */}
      <Projects />

      {/* ===== CONTACT SECTION ===== */}
      <Contact />

{/* ===== FOOTER SECTION ===== */}
  <Footer />
    </div>


  )
}

export default App
