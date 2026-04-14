import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import craftLogo from "../assets/screenshots/craftflow/craftflow-logo.png";
import eduCareLogo from "../assets/screenshots/educare/educare-logo.png";
import cookSyLogo from "../assets/screenshots/cooksy/cooksy-logo.png";

const projects = [
  {
    name: "CraftFlow",
    tag: "Employee Management System",
    description:
      "Scalable employee management system with RBAC, payroll automation, and analytics.",
    highlights: [
      "RBAC (Admin, HR, Employee)",
      "Stripe Payroll Integration",
      "REST API Dashboard",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
    live: "https://craft-flow.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/craftflow-client",
    serverRepo: "https://github.com/md-shafiqul-islam/craftflow-server",
    gradient: "from-blue-500/20 to-purple-500/20",
    logo: craftLogo,
  },
  {
    name: "EduCare",
    tag: "Educational Platform",
    description:
      "Role-based learning platform with booking system and protected dashboards.",
    highlights: ["Authentication System", "Service Booking Flow", "REST APIs"],
    tech: ["React", "Firebase", "Node.js", "MongoDB"],
    live: "https://educare-9e09b.web.app",
    clientRepo: "https://github.com/md-shafiqul-islam/educare-client",
    serverRepo: "https://github.com/md-shafiqul-islam/educare-server",
    gradient: "from-green-500/20 to-teal-500/20",
    logo: eduCareLogo,
  },
  {
    name: "CookSy",
    tag: "Recipe Platform",
    description:
      "Interactive recipe-sharing platform with authentication and CRUD features.",
    highlights: [
      "Full CRUD System",
      "User Interaction (Likes/Search)",
      "Firebase Auth",
    ],
    tech: ["React", "Firebase", "Node.js", "MongoDB"],
    live: "https://cooksy.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/cooksy-client",
    serverRepo: "https://github.com/md-shafiqul-islam/cooksy-server",
    gradient: "from-orange-500/20 to-red-500/20",
    logo: cookSyLogo,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-base-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Projects <span className="text-primary">I Built</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Real-world full-stack systems focused on scalability,
            authentication, and backend architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group bg-base-300 border border-base-content/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Top */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="w-20 h-20 bg-base-200 rounded-xl flex items-center justify-center shadow-md">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-primary">{project.tag}</p>
                </div>

                <p className="text-sm text-base-content/70">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="text-xs flex items-center gap-2 text-base-content/70"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-content px-3 py-2 rounded-lg text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <a
                    href={project.clientRepo}
                    target="_blank"
                    className="p-2 border rounded-lg"
                  >
                    <FaGithub />
                  </a>

                  {project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      className="p-2 border rounded-lg"
                    >
                      <FaCode />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/md-shafiqul-islam"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-content transition"
          >
            <FaGithub /> View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
