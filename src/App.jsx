

function App() {


  return (
     <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <header className="max-w-4xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tailwind v4 Demo</h1>
        <nav className="space-x-4">
          <button className="px-4 py-2 rounded-md bg-sky-600 text-white">Get started</button>
          <button className="px-4 py-2 rounded-md border">Docs</button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="mt-8">
          <h2 className="text-3xl font-extrabold mb-4">Build fast with Tailwind v4</h2>
          <p className="prose">This is a quick test of Tailwind utilities — responsive, dark mode, and components.</p>
        </section>
      </main>
    </div>
  )
}

export default App
