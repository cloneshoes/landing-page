
export default function Projects() {
const projects = [
    {
      title: "E-Commerce Store",
      desc: "A modern online store built with React, Tailwind, and Firebase.",
      tech: ["React", "TailwindCSS", "Firebase"],
      link: "#",
    },
    {
      title: "Law Firm Website",
      desc: "A professional multi-page site with dark theme and animations.",
      tech: ["React", "Framer Motion", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Portfolio Site",
      desc: "My personal portfolio showcasing responsive design and projects.",
      tech: ["Vite", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400">
              {p.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="inline-block mt-auto px-5 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}