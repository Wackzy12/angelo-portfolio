export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight"
        >
          Angelo.
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#certifications"
            className="transition hover:text-white"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}