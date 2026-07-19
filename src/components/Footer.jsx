import {
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer
      className="
        bg-zinc-50
        dark:bg-[#09090B]
        border-t
        border-zinc-300
        dark:border-zinc-800
        transition-colors
        duration-300
      "
    >
      <div className="border-t border-zinc-300 dark:border-zinc-800 mb-16 transition-colors">
        <div className="max-w-7xl mx-auto px-8 py-20">

          <div className="flex flex-col lg:flex-row justify-between gap-16">

            {/* Left */}

            <div>

              <h2
                className="text-5xl font-light"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Akash G
              </h2>

              <p className="mt-4 max-w-md leading-8 text-zinc-600 dark:text-zinc-500 transition-colors">
                Bridging Artificial Intelligence,
                Healthcare and Computational Biology
                through meaningful research and technology.
              </p>

            </div>

            {/* Right */}

            <div>

              <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs mb-6">
                Connect
              </p>

              <div className="flex gap-7 text-zinc-500">

                <a
                  href="https://github.com/akashgans07"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-g-5151b232a/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://medium.com/@akashgans07"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  <FaMedium size={22} />
                </a>

                <a
                  href="mailto:akashgans07@gmail.com"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  <MdEmail size={22} />
                </a>

              </div>

            </div>

          </div>

          <div
            className="
              mt-20
              pt-8
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-4
              border-t
              border-zinc-300
              dark:border-zinc-800
              transition-colors
            "
          >

            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              © 2026 Akash G. All Rights Reserved.
            </p>

            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Simplicity Personified.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;