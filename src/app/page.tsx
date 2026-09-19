export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Aspiring AI / Machine Learning Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I'm Angelo.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build practical software and AI solutions using
            machine learning, computer vision, and modern web
            technologies.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Wackzy12"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}