import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo/logo-nav.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key (good practice)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Courses", to: "courses" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="m-2 md:m-3 lg:m-4 rounded-full border border-secondary/50 lg:border-secondary transition-all duration-300 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 md:px-6 md:py-3">
        {/* Logo & Mobile Menu Button Container */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={26} className="text-text-accent" />
            ) : (
              <Menu size={26} className="text-text-accent" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center"
          >
            <img
              className="hidden lg:block w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-secondary p-0.5"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-accent border-b-2 border-secondary"
                className="cursor-pointer text-text-accent text-sm md:text-base font-medium hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1h3eesjwdaR4pqfPTZMXF17wr10EsmLt8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-text-accent rounded-full px-6 md:px-8 py-2 md:py-2.5 text-sm md:text-base hover:brightness-110 hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-primary shadow-lg p-6 flex flex-col justify-between text-text-accent transition-transform duration-300">
          {/* Top: Navigation links */}
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setMenuOpen(false)}
                className="text-base md:text-lg font-medium hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom: Resume button */}
          <a
            href="https://drive.google.com/file/d/1h3eesjwdaR4pqfPTZMXF17wr10EsmLt8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-base-200 px-5 py-2 rounded-full font-medium shadow hover:bg-secondary/90 transition-colors duration-300 mt-6 text-center"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
