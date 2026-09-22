import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const experiences = [
    {
      role: "OJT Trainee - Information Technology",
      company: "Berthaphil, Inc",
      period: "Internship",
      description:
        "Provided technical support and contributed to the improvement of an open-source vehicle logging web application during on-the-job training.",
      responsibilities: [
        "Assisted with troubleshooting LAN cables, network switches, servers, and faulty printers.",
        "Contributed to an open-source vehicle logging web application using TypeScript, HTML, CSS, and JavaScript.",
        "Developed and improved features for vehicle, fuel consumption, incident, and maintenance logging.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Networking",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Hands-on experience beyond personal projects."
          description="Practical experience gained through technical support, networking, and web application development during my on-the-job training."
        />

        <div className="mt-16 space-y-8">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="rounded-3xl border border-gray-800 p-8 md:p-10"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    {experience.period}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {experience.company}
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-base leading-7 text-gray-400">
                {experience.description}
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Responsibilities
                </h4>

                <ul className="mt-4 space-y-3 text-gray-400">
                  {experience.responsibilities.map(
                    (responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />

                        <span>{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-900 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}