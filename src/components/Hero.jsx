import profile from "../assets/profile.png";
import Section from "./Section";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

function Hero() {
  return (
    <Section>
      <section
        id="home"
        className="
          min-h-screen
          bg-zinc-50
          dark:bg-[#09090B]
          text-zinc-900
          dark:text-white
          pt-36
          overflow-hidden
          transition-colors
          duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm mb-8">
              Simplicity Personified
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-[-0.05em]">
              Where
              <br />
              Artificial
              <br />
              Intelligence
              <br />
              meets Biology.
            </h1>

            <p className="mt-10 text-lg leading-9 text-zinc-600 dark:text-zinc-400 max-w-xl transition-colors">
              Designing intelligent systems for healthcare,
              medical imaging and computational biology.
            </p>

            {/* SOCIALS */}

            <div className="flex items-center gap-7 mt-10 text-zinc-500">

              <a
                href="https://github.com/akashgans07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-g-5151b232a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:akashgans07@gmail.com"
                className="hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <MdEmail size={22} />
              </a>

              <a
                href="https://medium.com/@akashgans07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaMedium size={22} />
              </a>

            </div>

            {/* Divider */}

            <div className="w-24 border-t border-zinc-300 dark:border-zinc-800 my-12 transition-colors"></div>

            {/* Buttons */}

            <div className="flex gap-5">

              <a
                href="#projects"
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
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Explore My Work
                <HiArrowUpRight />
              </a>

              <a
                href="/Akash_G_CV.pdf"
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
                  hover:border-black
                  dark:hover:border-white
                  transition-all
                  duration-300
                "
              >
                Resume
                <HiArrowUpRight />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-end items-end pt-20">

            <img
              src={profile}
              alt="Akash G"
              className="
                h-[1080px]
                lg:h-[760px]
                object-contain
                object-bottom
                select-none
                pointer-events-none
              "
            />

          </div>

        </div>
      </section>
    </Section>
  );
}

export default Hero;