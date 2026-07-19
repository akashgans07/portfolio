import { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import EducationSheet from "./EducationSheet";
import SectionReveal from "./SectionReveal";

function Education() {
  const [selected, setSelected] = useState(null);

  const education = [
    {
      id: 1,
      school: "SBOA School & Junior College",
      subtitle: "Chennai, Tamil Nadu",
      duration: "2010 – 2024",

      details: {
        title: "SBOA School & Junior College",
        duration: "2010 – 2024",

        items: [
          {
            heading: "10th Standard",
            value: "93.33%",
            extra: "560 / 600 Marks",
          },

          {
            heading: "12th Standard",
            value: "96.20%",
            extra: "481 / 500 Marks",
          },
        ],
      },
    },

    {
      id: 2,
      school: "Saveetha Engineering College",
      subtitle: "Affiliated to Anna University",
      duration: "2024 – Present",

      details: {
        title: "Saveetha Engineering College",
        duration: "2024 – Present",

        items: [
          {
            heading: "Degree",
            value: "B.E. Computer Science & Engineering",
            extra: "",
          },

          {
            heading: "Current CGPA",
            value: "8.3 / 10",
            extra: "(Updating every semester)",
          },
        ],
      },
    },
  ];

  return (
    <>
      <SectionReveal>
        <section
          id="education"
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
              Education
            </p>

            <div className="mt-24 border-t border-zinc-300 dark:border-zinc-800 transition-colors">

              {education.map((item) => (

                <button
                  key={item.id}
                  onClick={() => setSelected(item.details)}
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    py-10
                    border-b
                    border-zinc-300
                    dark:border-zinc-800
                    text-left
                    transition-all
                    duration-300
                    hover:bg-zinc-100
                    dark:hover:bg-white/5
                  "
                >

                  <div className="flex items-center gap-5">

                    <HiOutlineAcademicCap
                      size={28}
                      className="text-zinc-500 dark:text-zinc-400 transition-colors"
                    />

                    <div>

                      <h3 className="text-2xl font-light">
                        {item.school}
                      </h3>

                      <p className="mt-2 text-zinc-500">
                        {item.subtitle}
                      </p>

                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500 transition-colors">
                        {item.duration}
                      </p>

                    </div>

                  </div>

                  <span className="text-4xl text-zinc-500">
                    ›
                  </span>

                </button>

              ))}

            </div>

          </div>
        </section>
      </SectionReveal>

      <EducationSheet
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

export default Education;