import { useState, useEffect, useMemo } from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import profileImg from "../assets/profile/pic-1.PNG";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);

  const roles = useMemo(
    () => [
      "React & Next.js Specialist",
      "Node.js & REST API Developer",
      "Building Scalable Web Applications",
      "Focused on Clean Architecture",
    ],
    [],
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopIndex % roles.length];

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(70);

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [roles, displayText, isDeleting, loopIndex, typingSpeed]);

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

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-screen px-4 md:px-6 lg:px-8 pt-20 bg-gradient-to-b from-base-200 via-base-200 to-base-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse justify-center items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Greeting */}
          <p className="text-base md:text-lg font-medium text-primary">
            Full-Stack Developer
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
            Md. Shafiqul Islam
          </h1>

          {/* Role with typewriter */}
          <div className="h-8 md:h-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              {displayText}
              <span className="ml-1 animate-pulse">
                {displayText ? "|" : ""}
              </span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-base-content/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Full-stack developer focused on building scalable, production-ready
            web applications using Next.js, TypeScript, and Node.js. I
            specialize in authentication, RBAC systems, and clean architecture
            that works in real-world products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/Md_Shafiqul_Islam_Resume.pdf"
              download="Md Shafiqul Islam Resume"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-content rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaDownload /> Download Resume
            </a>

            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 py-2">
            <a
              href="https://github.com/md-shafiqul-islam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-base-200 text-base-content hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/mdshafiqulislam1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-base-200 text-base-content hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <div className="relative">
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>

            {/* Profile image placeholder - replace with actual image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-4 border-primary/50 shadow-2xl overflow-hidden group">
              <img
                src={profileImg}
                alt="Md. Shafiqul Islam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
