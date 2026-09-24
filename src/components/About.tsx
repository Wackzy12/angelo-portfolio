import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Building practical solutions with AI and software."
          description="I'm a fresh graduate aspiring to build a career in artificial intelligence and machine learning. I enjoy building practical applications that combine software development, data processing, computer vision, and machine learning."
        />

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
          Through my academic and personal projects, I've gained
          experience developing APIs, working with machine learning
          models, processing data, and building applications across
          different technologies.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">
              Education
            </h3>

            <p className="mt-3 text-gray-400">
              Fresh Graduate
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Computer Science / Related Field
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">
              Current Focus
            </h3>

            <p className="mt-3 text-gray-400">
              Artificial Intelligence & Machine Learning
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Computer Vision · Backend Development · AI Applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}