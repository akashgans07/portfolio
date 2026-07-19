import { useState } from "react";
import {
  HiChevronDown,
  HiOutlineSun,
  HiOutlineMoon,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          flex
          items-center
          justify-between
          rounded-full
          border
          border-black/10
          dark:border-white/10
          bg-white/70
          dark:bg-black/20
          backdrop-blur-2xl
          px-8
          py-4
          transition-all
          duration-300"
        >

          {/* LOGO */}

          <div>

            <h1
              className="text-[34px] leading-none text-black dark:text-white transition-colors"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Akash G
            </h1>

            <p className="mt-2 text-[10px] uppercase tracking-[0.45em] text-zinc-500 dark:text-zinc-500">
              Simplicity Personified
            </p>

          </div>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-8 text-[15px] text-zinc-700 dark:text-zinc-400 transition-colors">

            <a
              href="#story"
              className="hover:text-black dark:hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-black dark:hover:text-white transition duration-300"
            >
              Work
            </a>

            <a
              href="#research"
              className="hover:text-black dark:hover:text-white transition duration-300"
            >
              Research
            </a>

            {/* MORE MENU */}

            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setTimeout(() => setMenuOpen(false), 150)}
            >

              <button
                className="flex items-center gap-1 hover:text-black dark:hover:text-white transition"
              >
                More

                <HiChevronDown
                  className={`transition duration-300 ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`absolute right-0 top-full pt-2 w-64
                rounded-2xl
                border
                border-black/10
                dark:border-white/10
                bg-white/95
                dark:bg-zinc-950/95
                backdrop-blur-2xl
                overflow-hidden
                shadow-2xl
                transition-all
                duration-300
                origin-top

                ${
                  menuOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >

                <a
                  href="#education"
                  className="block px-6 py-3 tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  Education
                </a>

                <a
                  href="#skills"
                  className="block px-6 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  Skills
                </a>

                <a
                  href="#certifications"
                  className="block px-6 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  Certifications
                </a>

                <a
                  href="#contact"
                  className="block px-6 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  Contact
                </a>

                <a
                  href="/Akash_G_Resume.pdf"
                  className="block px-6 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  Resume
                </a>

              </div>

            </div>

            {/* THEME BUTTON */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
              rounded-full
              border
              border-black/10
              dark:border-white/10
              p-2
              hover:bg-black/5
              dark:hover:bg-white/5
              transition-all
              duration-300"
            >
              {darkMode ? (
  <HiOutlineMoon size={18} />
) : (
  <HiOutlineSun size={18} />
)}
            </button>

          </nav>
                    {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-black dark:text-white transition-colors"
          >
            {mobileMenu ? (
              <HiXMark size={28} />
            ) : (
              <HiBars3 size={28} />
            )}
          </button>

          {/* MOBILE MENU */}

          {mobileMenu && (

            <div className="absolute top-24 left-0 w-full px-6 lg:hidden">

              <div
                className="
                rounded-3xl
                border
                border-black/10
                dark:border-white/10
                bg-white/95
                dark:bg-zinc-950/95
                backdrop-blur-2xl
                overflow-hidden
                animate-fadeIn"
              >

                <a
                  href="#story"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Work
                </a>

                <a
                  href="#research"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Research
                </a>

                <a
                  href="#education"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Education
                </a>

                <a
                  href="#skills"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Skills
                </a>

                <a
                  href="#certifications"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Certifications
                </a>

                <a
                  href="#contact"
                  className="block px-8 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Contact
                </a>

                <a
                  href="/Akash_G_Resume.pdf"
                  className="block px-8 py-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
                >
                  Resume
                </a>

                {/* Mobile Theme Toggle */}

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-8
                    py-5
                    border-t
                    border-black/5
                    dark:border-white/5
                    hover:bg-black/5
                    dark:hover:bg-white/5
                    transition
                  "
                >
                  {darkMode ? (
                    <>
                      <HiOutlineSun size={20} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineMoon size={20} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;