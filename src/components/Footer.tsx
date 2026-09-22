export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Angelo. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Wackzy12"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}