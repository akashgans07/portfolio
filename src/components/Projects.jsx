import { HiArrowUpRight } from "react-icons/hi2";
import { Images } from "lucide-react";
import SectionReveal from "./SectionReveal";

function Projects() {
  const project = {
    title: "Skin Disease Prediction",
    subtitle: "Featured Project",

    description:
      "A deep learning powered mobile application that identifies multiple skin diseases using TensorFlow and Flutter. Built with the vision of making AI-assisted healthcare more accessible through intelligent diagnosis.",

    caseStudy:
      "https://github.com/akashgans07/skin-disease-prediction",

    technologies: [
      "TensorFlow",
      "Flutter",
      "Python",
      "OpenCV",
      "Deep Learning",
    ],
  };

  return (
    <SectionReveal>
      <section
        id="projects"
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
            Selected Work
          </p>

          <p
            className="
              mt-8
              text-5xl
              md:text-6xl
              font-['Great_Vibes']
              text-zinc-600
              dark:text-zinc-200
              opacity-90
              transition-colors
            "
          >
            crafted with intent.
          </p>

          <div className="mt-28">

            <p
              className="
                text-[140px]
                md:text-[170px]
                leading-none
                font-extralight
                text-black/5
                dark:text-white/5
                select-none
                transition-colors
              "
            >
              01
            </p>

            <div className="grid lg:grid-cols-[1.55fr_0.85fr] gap-24 -mt-8">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs">
                  {project.subtitle}
                </p>

                <h3 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-light leading-[1.05]">
                  {project.title}
                </h3>

                <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-600 dark:text-zinc-400 transition-colors">
                  {project.description}
                </p>

              </div>

              {/* RIGHT */}

              <div className="lg:-ml-10 lg:mt-8">

                <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs">
                  Built With
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-zinc-300
                        dark:border-zinc-700
                        bg-white
                        dark:bg-transparent
                        px-6
                        py-3
                        text-base
                        text-zinc-700
                        dark:text-zinc-300
                        transition-all
                        duration-300
                        hover:bg-black
                        hover:text-white
                        dark:hover:bg-white
                        dark:hover:text-black
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                                <div className="mt-16 flex items-center gap-3 whitespace-nowrap">

                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-black
                      dark:bg-white
                      text-white
                      dark:text-black
                      px-8
                      py-4
                      font-medium
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-[1.03]
                      hover:shadow-xl
                    "
                  >
                    View Project
                    <HiArrowUpRight size={18} />
                  </a>

                  <button
                    onClick={() => alert("Live demo coming soon 🚀")}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-zinc-300
                      dark:border-zinc-700
                      px-8
                      py-4
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                      hover:border-black
                      dark:hover:bg-white
                      dark:hover:text-black
                      dark:hover:border-white
                      hover:-translate-y-1
                    "
                  >
                    Try App
                    <HiArrowUpRight size={18} />
                  </button>

                  <button
                    onClick={() => alert("Project gallery coming soon 📷")}
                    aria-label="Project Gallery"
                    className="
                      h-[56px]
                      w-[56px]
                      rounded-full
                      border
                      border-zinc-300
                      dark:border-zinc-700
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                      hover:border-black
                      dark:hover:bg-white
                      dark:hover:text-black
                      dark:hover:border-white
                      hover:-translate-y-1
                    "
                  >
                    <Images size={22} strokeWidth={1.8} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </SectionReveal>
  );
}

export default Projects;