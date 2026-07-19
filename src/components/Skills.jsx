import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiFlutter,
  SiOpencv,
  SiMysql,
} from "react-icons/si";

import SectionReveal from "./SectionReveal";

const skills = [
  {
    icon: <FaPython />,
    title: "Python",
    subtitle: "Machine Learning",
  },
  {
    icon: <SiTensorflow />,
    title: "TensorFlow",
    subtitle: "Deep Learning",
  },
  {
    icon: <FaReact />,
    title: "React",
    subtitle: "Frontend",
  },
  {
    icon: <SiFlutter />,
    title: "Flutter",
    subtitle: "Mobile Apps",
  },
  {
    icon: <SiOpencv />,
    title: "OpenCV",
    subtitle: "Computer Vision",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    subtitle: "Databases",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    subtitle: "Backend",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    subtitle: "Version Control",
  },
];

function Skills() {
  return (
    <SectionReveal>
      <section
        id="skills"
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
            Expertise
          </p>

          <h2 className="mt-5 text-6xl md:text-7xl font-light leading-[1.05]">
            Tech
            <br />
            Stack
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-600 dark:text-zinc-400 transition-colors">
            The technologies and frameworks I use to build
            intelligent software, healthcare applications and
            scalable AI systems.
          </p>

          <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {skills.map((skill, index) => (

              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-zinc-300
                  dark:border-white/10
                  bg-white
                  dark:bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400
                  hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
                  dark:hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
                "
              >

                <div className="absolute top-6 right-6 text-black/5 dark:text-white/5 text-5xl font-extralight transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="text-5xl text-cyan-500 dark:text-cyan-400 transition duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>

                <h3 className="mt-10 text-3xl font-light">
                  {skill.title}
                </h3>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7 transition-colors">
                  {skill.subtitle}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </SectionReveal>
  );
}

export default Skills;