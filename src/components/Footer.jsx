import { useEffect, useState } from "react";
import { HiArrowUpCircle } from "react-icons/hi2";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-secondary py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-sans">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-serif font-extrabold">Md. Shafiqul Islam</span>{" "}
          — All Rights Reserved.
        </p>
        <p className="text-xs mt-1 font-sans">
          Built with{" "}
          <span className="text-accent">💻 React & Tailwind CSS</span>
        </p>
      </div>

      {showScrollTop && (
        <Motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 text-accent hover:text-accent/80 text-4xl cursor-pointer transition-opacity duration-500 opacity-100 z-50 bg-white/10 backdrop-blur rounded-full p-1 shadow-md"
          title="Back to top"
        >
          <HiArrowUpCircle />
        </Motion.button>
      )}
    </footer>
  );
};

export default Footer;
