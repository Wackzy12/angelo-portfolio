import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const projects = [
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
    },
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
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-gray-800 px-6 py-24"
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
              className="group rounded-3xl border border-gray-800 p-8 transition hover:border-gray-600 md:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    {project.title}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    {project.subtitle}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-900 px-3 py-1.5 text-sm text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
                >
                  View GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}