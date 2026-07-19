import { useState } from "react";
import providers from "../data/certifications";

function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <>
      <section
        id="certifications"
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
            Learning
          </p>

          <p className="mt-10 max-w-xl text-zinc-600 dark:text-zinc-400 text-lg leading-9 transition-colors">
            Professional certifications from leading
            universities and technology companies,
            reflecting my commitment to lifelong learning.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div>
              <h3 className="text-6xl font-light">
                20+
              </h3>

              <p className="text-zinc-500 mt-3">
                Professional Certifications
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-light">
                9
              </h3>

              <p className="text-zinc-500 mt-3">
                Learning Partners
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-light">
                3
              </h3>

              <p className="text-zinc-500 mt-3">
                AWS Training Badges
              </p>
            </div>

          </div>

          <div className="mt-24 flex justify-center">

            <button
              onClick={() => {
                setShowModal(true);
                setSelectedProvider(null);
              }}
              className="
                group
                rounded-full
                border
                border-zinc-300
                dark:border-zinc-800
                px-8
                py-4
                transition-all
                duration-300
                flex
                items-center
                gap-3
                hover:bg-black
                hover:text-white
                hover:border-black
                dark:hover:bg-white
                dark:hover:text-black
                dark:hover:border-white
              "
            >
              View My Certifications

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>

        </div>

      </section>

      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex justify-center items-center p-6">

          <div className="w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[30px] border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#111111] text-zinc-900 dark:text-white transition-colors">

            <div className="sticky top-0 flex justify-between items-center border-b border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#111111] px-10 py-8 transition-colors">

              <div>

                {selectedProvider ? (

                  <>

                    <button
                      onClick={() => setSelectedProvider(null)}
                      className="mb-4 text-zinc-500 hover:text-black dark:hover:text-white transition"
                    >
                      ← Back
                    </button>

                    <h2 className="text-3xl font-light">
                      {selectedProvider.name}
                    </h2>

                    <p className="mt-2 text-zinc-500">
                      {selectedProvider.count}
                    </p>

                  </>

                ) : (

                  <>

                    <h2 className="text-3xl font-light">
                      Certifications
                    </h2>

                    <p className="mt-2 text-zinc-500">
                      Select a learning partner
                    </p>

                  </>

                )}

              </div>

              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedProvider(null);
                }}
                className="text-3xl text-zinc-400 hover:text-black dark:hover:text-white transition"
              >
                ×
              </button>

            </div>

            <div className="px-10 py-8 space-y-5 overflow-y-auto max-h-[65vh]">

              {!selectedProvider ? (

                providers.map((provider) => {

                  const Icon = provider.icon;

                  return (

                    <button
                      key={provider.id}
                      onClick={() => setSelectedProvider(provider)}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-zinc-300
                        dark:border-zinc-800
                        bg-white
                        dark:bg-transparent
                        p-6
                        text-left
                        transition-all
                        duration-300
                        hover:border-zinc-500
                        hover:bg-zinc-100
                        dark:hover:bg-white/5
                      "
                    >

                      <div className="flex items-center gap-5">

                        <div className="text-zinc-700 dark:text-zinc-300">
                          <Icon size={24} />
                        </div>

                        <div>

                          <h3 className="text-xl font-light">
                            {provider.name}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {provider.count}
                          </p>

                        </div>

                      </div>

                      <span className="text-3xl text-zinc-500">
                        ›
                      </span>

                    </button>

                  );

                })

              ) : (

                selectedProvider.certificates.map((certificate) => (

                  <a
                    key={certificate.title}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block
                      rounded-2xl
                      border
                      border-zinc-300
                      dark:border-zinc-800
                      bg-white
                      dark:bg-transparent
                      p-6
                      transition-all
                      duration-300
                      hover:border-zinc-500
                      hover:bg-zinc-100
                      dark:hover:bg-white/5
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-xl font-light">
                          {certificate.title}
                        </h3>

                        <p className="mt-2 text-zinc-500">
                          Verified Credential
                        </p>

                      </div>

                      <span className="text-2xl text-zinc-500">
                        ↗
                      </span>

                    </div>

                  </a>

                ))

              )}

            </div>

          </div>

        </div>

      )}

    </>

  );
}

export default Certifications;