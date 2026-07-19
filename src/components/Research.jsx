import SectionReveal from "./SectionReveal";

function Research() {
  const research = [
    {
      title: "Artificial Intelligence",
      description:
        "Building intelligent systems capable of solving meaningful real-world problems through machine learning, deep learning and intelligent automation.",
    },
    {
      title: "Healthcare AI",
      description:
        "Applying artificial intelligence to improve diagnosis, treatment planning and patient care by combining medical expertise with data-driven models.",
    },
    {
      title: "Computational Biology",
      description:
        "Exploring biological systems using computation, algorithms and large-scale biological datasets to accelerate scientific discovery.",
    },
    {
      title: "Medical Imaging",
      description:
        "Developing computer vision models for accurate disease detection, medical image analysis and AI-assisted clinical decision support.",
    },
  ];

  return (
    <SectionReveal>
      <section
        id="research"
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
        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm">
            Vision
          </p>

          <h2 className="mt-5 text-6xl md:text-7xl font-light leading-[1.05]">
            Research
            <br />
            Interests.
          </h2>

          <div className="mt-28">

            {research.map((item, index) => (
              <div
                key={item.title}
                className="
                  group
                  grid
                  lg:grid-cols-[120px_320px_1fr]
                  gap-10
                  items-start
                  border-b
                  border-zinc-300
                  dark:border-zinc-800
                  py-12
                  transition-all
                  duration-500
                  hover:border-zinc-500
                  dark:hover:border-zinc-600
                "
              >
                {/* Number */}

                <p
                  className="
                    text-7xl
                    md:text-8xl
                    font-extralight
                    text-black/5
                    dark:text-white/5
                    select-none
                    transition
                    duration-500
                    group-hover:text-black/10
                    dark:group-hover:text-white/10
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-light
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <div>

                  <p
                    className="
                      text-lg
                      leading-9
                      text-zinc-600
                      dark:text-zinc-400
                      transition-all
                      duration-300
                      group-hover:text-zinc-800
                      dark:group-hover:text-zinc-300
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-8">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-zinc-300
                        dark:border-zinc-700
                        bg-zinc-100
                        dark:bg-white/[0.03]
                        px-5
                        py-2
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-zinc-600
                        dark:text-zinc-400
                        transition-all
                        duration-300
                        group-hover:border-zinc-500
                        group-hover:bg-zinc-200
                        dark:group-hover:bg-white/[0.06]
                      "
                    >
                      Active Research Interest
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionReveal>
  );
}

export default Research;