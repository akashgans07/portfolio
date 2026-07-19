import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";

function LearningPreview() {
  return (
    <SectionReveal>

      <section
        id="learning"
        className="bg-[#09090B] text-white py-40"
      >

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm">
            Learning
          </p>

          <h2 className="mt-5 text-6xl md:text-7xl font-light leading-[1.05]">
            Continuous
            <br />
            Learning.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400">
            Professional certifications from leading
            universities and technology companies,
            reflecting my commitment to lifelong learning.
          </p>

          <div className="grid md:grid-cols-3 gap-16 mt-24">

            <div>
              <h3 className="text-7xl font-light">
                20+
              </h3>

              <p className="mt-4 text-zinc-500">
                Professional Certifications
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-light">
                9
              </h3>

              <p className="mt-4 text-zinc-500">
                Learning Partners
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-light">
                3
              </h3>

              <p className="mt-4 text-zinc-500">
                AWS Training Badges
              </p>
            </div>

          </div>

          <Link
            to="/learning"
            className="
              inline-flex
              mt-24
              rounded-full
              border
              border-zinc-700
              px-8
              py-4
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Explore Learning →
          </Link>

        </div>

      </section>

    </SectionReveal>
  );
}

export default LearningPreview;