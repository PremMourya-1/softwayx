import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow-md transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
      aria-label="Scroll to top"
    >
      <span className="text-xl">↑</span>
    </button>
  );
};

export default ScrollToTopButton;
