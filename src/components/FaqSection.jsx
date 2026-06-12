import { useState } from "react";

const FaqSection = ({
  heading,
  accent,
  subheading,
  items,
  className = "section-padding",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items?.length) return null;

  return (
    <section className={`${className}`}>
      <div className="mx-auto max-w-[900px]   ">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {heading} <span className="gradient-text">{accent}</span>
          </h2>
          {subheading ? (
            <p className="text-gray-400 max-w-2xl mx-auto">{subheading}</p>
          ) : null}
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.question}
                className="border border-white/10 rounded-3xl bg-[#09101f]/80 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 bg-brand-blue/10 text-brand-blue"
                        : "bg-white/5 text-gray-300"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-6 text-gray-400 leading-7">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
