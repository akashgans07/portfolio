import { useEffect } from "react";

function EducationSheet({ selected, setSelected }) {
  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, setSelected]);

  if (!selected) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
      onClick={() => setSelected(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-3xl
          overflow-hidden
          rounded-3xl
          border
          border-zinc-300
          dark:border-zinc-800
          bg-white
          dark:bg-[#111111]
          text-zinc-900
          dark:text-white
          shadow-2xl
          transition-colors
          duration-300
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-300
            dark:border-zinc-800
            px-8
            py-6
            transition-colors
          "
        >
          <div>
            <h2 className="text-3xl font-light">
              {selected.title}
            </h2>

            <p className="mt-2 text-zinc-500">
              {selected.duration}
            </p>
          </div>

          <button
            onClick={() => setSelected(null)}
            className="text-3xl text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-8">
          {selected.items.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-zinc-300
                dark:border-zinc-800
                bg-zinc-50
                dark:bg-transparent
                p-6
                transition-colors
              "
            >
              <p className="uppercase tracking-[0.25em] text-xs text-zinc-500">
                {item.heading}
              </p>

              <h3 className="mt-3 text-2xl font-light">
                {item.value}
              </h3>

              {item.extra && (
                <p className="mt-2 text-zinc-500">
                  {item.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationSheet;