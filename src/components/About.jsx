export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Image / Avatar */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // placeholder – replace with your photo
          alt="Uche Igwe"
          className="w-48 h-48 rounded-full object-cover border-4 border-sky-500 dark:border-sky-400 shadow-lg"
        />  
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          I’m Uche Igwe — a frontend developer passionate about creating clean,
          interactive and accessible web applications. My focus is on modern React development,
          responsive UI design and smooth user experiences powered by Tailwind CSS.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400">
          Skills & Tools
        </h3>
        <ul className="flex flex-wrap justify-center md:justify-start gap-3">
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React",
            "Tailwind CSS",
            "Git & GitHub",
            "Firebase",
          ].map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300 rounded-full text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
