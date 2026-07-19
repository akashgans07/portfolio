import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import certifications from "../data/certifications";

function Learning() {
  return (
    <>
      <Navbar />

      <main className="bg-[#09090B] min-h-screen text-white pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm">
            Learning
          </p>

          <h1 className="mt-5 text-7xl font-light">
            Certifications.
          </h1>

          <p className="mt-8 max-w-3xl text-zinc-400 text-lg leading-9">
            A growing collection of professional certifications,
            badges and credentials that reflect my journey of
            continuous learning.
          </p>

          <div className="mt-24 space-y-8">

            {certifications.map((certificate) => (

              <div
                key={certificate.id}
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  p-8
                  transition-all
                  duration-300
                  hover:border-zinc-600
                  hover:bg-white/[0.03]
                "
              >

                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  {certificate.provider}
                </p>

                <h2 className="mt-4 text-3xl font-light">
                  {certificate.title}
                </h2>

                <div className="mt-8 flex flex-wrap items-center gap-6">

                  <span className="text-zinc-400">
                    {certificate.category}
                  </span>

                  <span className="rounded-full border border-green-500 px-4 py-1 text-sm text-green-400">
                    {certificate.status}
                  </span>

                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white underline underline-offset-4"
                  >
                    View Credential ↗
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Learning;