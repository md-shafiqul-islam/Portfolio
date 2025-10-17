import { useEffect, useState } from "react";
import { HiArrowUpCircle } from "react-icons/hi2";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-text-accent py-8 border-t-2 border-secondary backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm sm:text-base font-sans tracking-wide leading-relaxed">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-serif font-semibold text-accent">
            Md. Shafiqul Islam
          </span>{" "}
          - All Rights Reserved.
        </p>
        <p className="text-xs sm:text-sm text-accent/80 font-sans">
          Built with{" "}
          <span className="font-semibold text-text-accent">React</span> &{" "}
          <span className="font-semibold text-text-accent">Tailwind CSS</span>
        </p>
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="animate-bounce fixed bottom-6 right-6 text-4xl bg-accent text-base-200 p-2 rounded-full shadow-lg border border-secondary hover:bg-secondary hover:text-text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
          title="Back to top"
        >
          <HiArrowUpCircle />
        </button>
      )}
    </footer>
  );
};

export default Footer;
