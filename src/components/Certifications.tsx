import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  const certifications = [
      {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      description:
        "Introduction to cloud concepts, services, and best practices.",
      date: "2025",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      description:
        "Introduction to data analytics concepts, tools, and techniques.",
      date: "2025",
    },
    {
      title: "AI Fundamentals: Language and Vision in AI",
      issuer: "IBM SkillsBuild",
      description:
        "Basics of AI, including natural language processing and computer vision.",
      date: "2026",
    },
    {
        title: "AI For Business Professionals",
        issuer: "HP Life",
        description:
          "AI fundamentals and their applications in business, decision-making, and productivity.",
        date: "2026",
    },
  ];

  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Continuous learning and technical development."
          description="Certifications and learning experiences that support my growth in artificial intelligence, machine learning, and software development."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="group rounded-3xl border border-gray-800 p-8 transition hover:border-gray-600"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    {certification.issuer}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {certification.title}
                  </h3>
                </div>

                <span className="shrink-0 text-sm text-gray-500">
                  {certification.date}
                </span>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
                {certification.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}