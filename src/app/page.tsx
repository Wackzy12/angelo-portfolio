import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-800 bg-gray-950 px-4 py-2 text-sm text-gray-400">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
              Available for entry-level opportunities
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              AI Developer
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Hi, I'm Angelo Joaquin Ramos.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              I build practical software and AI solutions using
              machine learning, computer vision, data processing,
              and modern development technologies.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3.5 text-center font-medium text-black transition hover:bg-gray-200"
              >
                View Projects
              </a>

              <a
                href="/AngeloJoaquin_Ramos_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-700 px-7 py-3.5 text-center font-medium transition hover:border-gray-500 hover:bg-gray-900"
              >
                Download CV
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
              <span>FastAPI</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </section>
    
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
    <Footer />
    </main>
  );
}