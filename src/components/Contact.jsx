import {
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import SectionReveal from "./SectionReveal";

function Contact() {
  return (
    <SectionReveal>
      <section
        id="contact"
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
            Contact
          </p>

          {/* CONTACT CARD */}

          <div
            className="
              mt-20
              rounded-[30px]
              border
              border-zinc-300
              dark:border-zinc-800
              bg-white
              dark:bg-transparent
              p-10
              transition-colors
              duration-300
            "
          >

            <div className="grid md:grid-cols-2 gap-16">

              <div>

                <p className="mb-3 text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:akashgans07@gmail.com"
                  className="text-2xl transition hover:text-zinc-600 dark:hover:text-zinc-300"
                >
                  akashgans07@gmail.com
                </a>

              </div>

              <div>

                <p className="mb-3 text-zinc-500">
                  Based In
                </p>

                <h3 className="text-2xl font-light">
                  Chennai, India
                </h3>

              </div>

            </div>

            {/* SOCIALS */}

            <div className="mt-16 flex gap-8 text-zinc-500">

              <a
                href="https://github.com/akashgans07"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-black dark:hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-g-5151b232a/"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-black dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://medium.com/@akashgans07"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-black dark:hover:text-white"
              >
                <FaMedium size={24} />
              </a>

              <a
                href="mailto:akashgans07@gmail.com"
                className="transition duration-300 hover:text-black dark:hover:text-white"
              >
                <MdEmail size={24} />
              </a>

            </div>

          </div>

        </div>
      </section>
    </SectionReveal>
  );
}

export default Contact;