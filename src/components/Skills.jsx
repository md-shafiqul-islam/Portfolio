import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiShadcnui,
} from "react-icons/si";

const skills = {
  "Frontend Development": [
    { name: "React.js", icon: <FaReact />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert" },
    { name: "shadcn/ui", icon: <SiShadcnui />, level: "Advanced" },
    { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" },
  ],

  "Backend Development": [
    { name: "Node.js", icon: <FaNode />, level: "Intermediate" },
    { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
    { name: "REST API", icon: <SiPostman />, level: "Advanced" },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, level: "Advanced" },
    { name: "RBAC", icon: <SiJsonwebtokens />, level: "Advanced" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate" },
    { name: "Prisma ORM", icon: <SiPrisma />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
    { name: "Firebase", icon: <SiFirebase />, level: "Intermediate" },
  ],

  "Tools & Deployment": [
    { name: "Git & GitHub", icon: <FaGithub />, level: "Advanced" },
    { name: "Postman", icon: <SiPostman />, level: "Intermediate" },
    { name: "Vercel", icon: <SiVercel />, level: "Advanced" },
    { name: "Netlify", icon: <SiNetlify />, level: "Advanced" },
  ],
};

const levelColors = {
  Expert: "bg-green-500/10 text-green-400 border-green-500/30",
  Advanced: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

const Skills = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Heading animation
    const section = document.getElementById("skills");
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (section) observer1.observe(section);

    // Cards animation
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-skill-section]");
    sections.forEach((s) => observer2.observe(s));

    return () => {
      if (section) observer1.unobserve(section);
      sections.forEach((s) => observer2.unobserve(s));
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-base-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Technologies I use to build scalable, production-ready applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-14">
          {Object.entries(skills).map(([category, skillList], i) => (
            <div
              key={category}
              id={`skill-${i}`}
              data-skill-section
              className={`transition-all duration-700 ${
                visibleSections[`skill-${i}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Category */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {category}
                </h3>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skillList.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-base-200 border border-base-content/10 rounded-xl p-5 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      transitionDelay: visibleSections[`skill-${i}`]
                        ? `${index * 60}ms`
                        : "0ms",
                    }}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <h4 className="text-lg font-semibold text-base-content mb-2">
                      {skill.name}
                    </h4>

                    {/* Level */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                        levelColors[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-base-200 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-3">
            Always Improving 🚀
          </h3>
          <p className="text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
            I focus on real-world projects while improving my skills in scalable
            backend architecture, TypeScript-driven development, and modern
            React patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
