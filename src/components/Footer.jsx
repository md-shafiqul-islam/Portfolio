import { useEffect, useState } from "react";
import { HiArrowUpCircle } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <footer className="bg-base-300 border-t border-base-content/10 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Left: About */}
            <div>
              <h3 className="text-xl font-bold text-base-content mb-2">
                Md. Shafiqul Islam
              </h3>

              <p className="text-sm text-primary/80 mb-3 font-medium">
                Full-Stack Developer • MERN | Next.js | Prisma
              </p>

              <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                Full-Stack Developer specializing in building scalable, clean,
                and user-focused web applications.
              </p>

              <div className="flex gap-3">
                <a className="w-9 h-9 rounded-lg bg-base-200 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110">
                  <FaGithub size={16} />
                </a>

                <a className="w-9 h-9 rounded-lg bg-base-200 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>

            {/* Middle: Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-base-content mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <button
                      onClick={() => scrollToSection(link.to)}
                      className="text-base-content/70 hover:text-primary hover:translate-x-1 transition-all duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact */}
            <div>
              <h3 className="text-xl font-bold text-base-content mb-4">
                Get in Touch
              </h3>

              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="hover:text-primary transition-all duration-300">
                  📧 shafiqul.islam3558@gmail.com
                </li>

                <li className="hover:text-primary transition-all duration-300">
                  📞 +880 1717 910578
                </li>

                <li className="text-base-content/60">Mymensingh, Bangladesh</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-base-content/10">
            <p className="text-center text-sm text-base-content/60">
              &copy; {new Date().getFullYear()} Md. Shafiqul Islam. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-content rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <HiArrowUpCircle className="text-3xl" />
        </button>
      )}
    </>
  );
};

export default Footer;
