import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experiences",
        "education",
        "courses",
        "contact",
      ];

      let current = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experiences", to: "experiences" },
    { name: "Education", to: "education" },
    { name: "Courses", to: "courses" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-200/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary">
            <span className="text-base font-bold text-primary tracking-wide">
              SI
            </span>
          </div>

          <span className="hidden md:block text-base md:text-lg font-semibold text-base-content transition-colors duration-300 group-hover:text-primary">
            Shafiqul Islam
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => scrollToSection(link.to)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.to
                    ? "text-primary bg-primary/10"
                    : "text-base-content/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}

                {/* Active underline */}
                {activeSection === link.to && (
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-5 -translate-x-1/2 bg-primary rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://drive.google.com/file/d/1YgSJndI2ELeeN-nMCWZNzOB-Z_InSEVN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            title="Resume"
          >
            <HiOutlineDocumentText size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-base-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 w-72 h-full bg-base-200 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col space-y-2 flex-grow">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className={`px-4 py-3 rounded-lg text-base font-medium text-left transition ${
                  activeSection === link.to
                    ? "text-primary bg-primary/10"
                    : "text-base-content/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1YgSJndI2ELeeN-nMCWZNzOB-Z_InSEVN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 bg-primary text-primary-content rounded-lg font-medium mt-6 text-center"
            onClick={() => setMenuOpen(false)}
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
