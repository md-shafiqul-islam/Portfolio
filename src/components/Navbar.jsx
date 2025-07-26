import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion as Motion } from "framer-motion";
import logo from "../assets/logo/logo-nav.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="bg-gradient-to-r from-primary via-secondary to-accent px-4 py-1 shadow-2xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X color="red" /> : <Menu color="white" />}
          </button>

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] inline-block"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-base-100"
                className="cursor-pointer px-3 py-2 text-xl font-semibold hover:text-base-100"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:flex">
          <a
            href="https://drive.google.com/file/d/1XwnSI1tyrirCHrly_YnFIYni_LwetreA/view?usp=sharing"
            target="_blank"
            download="Md-Shafiqul-Islam-Resume"
            className="btn  btn-secondary rounded-md lg:px-6 hover:shadow"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <>
          <Motion.div
            className="fixed inset-0"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></Motion.div>

          <Motion.div
            className="lg:hidden fixed top-0 left-0 z-50"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="mt-14 mx-4 rounded-md bg-base-100 p-4 space-y-3 shadow-md">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-accent"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-semibold text-primary hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}

              {/* Resume Button for Mobile */}
              <a
                href="https://drive.google.com/file/d/1XwnSI1tyrirCHrly_YnFIYni_LwetreA/view?usp=sharing"
                target="_blank"
                download="Md-Shafiqul-Islam-Resume"
                className="btn btn-outline btn-secondary rounded-md lg:px-6 hover:shadow"
              >
                View Resume
              </a>
            </div>
          </Motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
