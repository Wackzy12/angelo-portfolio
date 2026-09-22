import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "TypeScript", "JavaScript", "Dart"],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "Data Preprocessing",
      ],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "REST API", "SQL", "Docker"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Flutter", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I use to build software and AI applications."
          description="A growing set of technologies I've worked with through academic projects, personal projects, and hands-on development."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-800 p-8"
            >
              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}