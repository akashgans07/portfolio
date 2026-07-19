import SectionReveal from "./SectionReveal";

function About() {
  return (
    <SectionReveal>
      <section
        id="story"
        className="
          py-40
          bg-zinc-50
          dark:bg-[#09090B]
          text-zinc-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-8">

          <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm">
            My Story
          </p>

          <h2 className="mt-9 font-['Great_Vibes'] text-7xl text-zinc-600 dark:text-zinc-300 transition-colors">
            Experience is Wisdom
          </h2>

          <div className="mt-24 grid md:grid-cols-12 gap-12">

            {/* Left */}

            <div className="md:col-span-4">

              <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
                Journey
              </p>

            </div>

            {/* Right */}

            <div className="md:col-span-8 space-y-10">

              <p className="text-2xl leading-relaxed font-light text-zinc-700 dark:text-zinc-300 transition-colors">
                My journey began with a fascination for science and the desire
                to understand how the world works. Mathematics, biology,
                chemistry, and physics shaped the way I think and continue to
                influence how I approach problems today.
              </p>

              <p className="text-2xl leading-relaxed font-light text-zinc-700 dark:text-zinc-300 transition-colors">
                Studying Computer Science introduced me to Artificial
                Intelligence, where I discovered that technology can solve
                meaningful problems beyond software alone. Since then, I have
                been building projects, strengthening my technical foundation,
                and exploring the intersection of AI and healthcare.
              </p>

              <p className="text-2xl leading-relaxed font-light text-zinc-700 dark:text-zinc-300 transition-colors">
                My long-term goal is to contribute to research in AI-driven
                healthcare and computational biology, creating intelligent
                systems that can improve diagnosis, treatment, and scientific
                discovery.
              </p>

            </div>

          </div>

        </div>
      </section>
    </SectionReveal>
  );
}

export default About;