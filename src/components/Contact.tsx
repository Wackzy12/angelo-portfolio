import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something useful."
          description="I'm currently looking for entry-level opportunities where I can grow as an AI Engineer and contribute to practical software and AI projects."
        />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:wackzramos@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-gray-200"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Wackzy12"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 px-6 py-3 text-center font-medium transition hover:bg-gray-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/angelo-joaquin-ramos-aa1930395"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 px-6 py-3 text-center font-medium transition hover:bg-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}