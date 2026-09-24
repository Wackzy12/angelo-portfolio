import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const projects = [
    {
      title: "Bullseye",
      subtitle: "Dart Detection & Scoring Application",
      description:
        "A computer vision-based application for tracking darts, detecting dartboards, and calculating dart scores using a trained object detection model and image processing.",
      technologies: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "OpenCV",
        "Flutter",
        "Docker",
      ],
      github: "https://github.com/GGTsuyan/bullseye_app_2",
      featured: true,
    },
    {
      title: "Lazy Dashboard",
      subtitle: "Productivity Dashboard",
      description:
        "A productivity dashboard for managing tasks and exploring productivity patterns through data-driven insights.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "JavaScript",
      ],
      github: "https://github.com/Wackzy12/Lazy-Dashboard",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Things I've built and worked on."
          description="A selection of projects that showcase my experience in software development, backend systems, and artificial intelligence."
        />

        <div className="mt-16 space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border p-8 transition md:p-10 ${
                project.featured
                  ? "border-gray-700 bg-gray-950"
                  : "border-gray-800"
              } hover:border-gray-500`}
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  {project.featured && (
                    <span className="inline-flex rounded-full border border-gray-700 bg-black px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Featured Project
                    </span>
                  )}

                  <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-500">
                    {project.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.subtitle}
                  </h3>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-gray-800 bg-black px-3 py-1.5 text-sm text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:pt-1">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
                    >
                      View GitHub →
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-gray-800 px-5 py-2.5 text-sm text-gray-600">
                      GitHub coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}