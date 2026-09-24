import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI / Machine Learning",
      description:
        "Technologies and concepts I've used for computer vision and machine learning projects.",
      skills: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "Data Preprocessing",
      ],
    },
    {
      title: "Backend & APIs",
      description:
        "Tools I use to build APIs, backend services, and application infrastructure.",
      skills: [
        "FastAPI",
        "REST API",
        "SQL",
        "Docker",
      ],
    },
    {
      title: "Frontend & Applications",
      description:
        "Technologies I've used to build web and mobile applications.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Flutter",
        "Dart",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Platforms",
      description:
        "Development tools and platforms I've worked with across my projects.",
      skills: [
        "Git",
        "GitHub",
        "Supabase",
        "Roboflow",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I use to build software and AI applications."
          description="A growing technical toolkit developed through academic projects, personal projects, and hands-on development."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-gray-800 p-8 transition hover:border-gray-600"
            >
              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-800 bg-gray-950 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {skill}
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