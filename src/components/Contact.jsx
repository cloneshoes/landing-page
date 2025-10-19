export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-slate-100 py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-sky-400">
        Get in Touch
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mb-12">
        Have a project in mind or want to collaborate?  
        Fill out the form below and I’ll get back to you soon.
      </p>

      <form className="max-w-2xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-700 bg-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-slate-700 bg-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-slate-700 bg-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
        ></textarea>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
