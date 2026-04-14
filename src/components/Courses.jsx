import programmingHero2 from "../assets/courses/programmingheroTwo.png";
import programmingHero1 from "../assets/courses/programmingHeroOne.jfif";
import phitron from "../assets/courses/phitron.png";

import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiC,
} from "react-icons/si";

/* ------------------ SAFE COLOR MAP ------------------ */
const colorMap = {
  primary: {
    text: "text-primary",
    bg: "bg-primary/20",
    gradient: "from-primary/20 to-primary/5",
  },
};

/* ------------------ COURSES DATA ------------------ */
const courses = [
  {
    title: "Next Level Web Development",
    provider: "Programming Hero",
    period: "Nov 2025 – Apr 2026",
    duration: "6 months (Advanced)",
    status: "Completed",
    type: "Advanced Full-Stack Development",
    color: "primary",
    icon: programmingHero2,
    skills: [
      "Advanced React Patterns",
      "Next.js Basics",
      "System Design Basics",
      "Authentication Security",
      "Scalable Backend Architecture",
      "Production Deployment",
    ],
    achievements: [
      "Built production-level full-stack applications with optimized architecture",
      "Improved authentication security with advanced JWT handling",
      "Worked with scalable backend structure and modular APIs",
      "Strengthened problem-solving with real-world project scenarios",
    ],
    techIcons: [SiTypescript, SiPostgresql, SiPrisma, SiNextdotjs],
  },

  {
    title: "Complete Web Development (MERN Stack)",
    provider: "Programming Hero",
    period: "Jan 2025 – Jul 2025",
    duration: "7 months (Intensive)",
    status: "Completed with Certificate",
    type: "Full-Stack Development",
    color: "primary",
    icon: programmingHero1,
    skills: [
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
    ],
    achievements: [
      "Built 3 production-ready full-stack applications",
      "Implemented authentication with Firebase & JWT",
      "Integrated payment gateway using Stripe",
      "Mastered REST API development and consumption",
      "Completed 50+ hands-on coding challenges",
    ],
    techIcons: [SiJavascript, SiReact, SiNodedotjs, SiMongodb],
  },

  {
    title: "C, C++, Data Structures & Algorithms",
    provider: "Phitron",
    period: "Apr 2024 – Oct 2024",
    duration: "7 months",
    status: "Completed",
    type: "Programming Fundamentals",
    color: "primary",
    icon: phitron,
    skills: [
      "C Programming",
      "C++",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
    achievements: [
      "Mastered core programming concepts from scratch",
      "Solved 100+ algorithmic problems",
      "Implemented linked lists, trees, graphs",
      "Learned time & space complexity analysis",
      "Built strong algorithmic foundation",
    ],
    techIcons: [SiC, SiCplusplus],
  },
];

/* ------------------ COMPONENT ------------------ */
const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("courses");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="courses" className="py-20 px-4 md:px-6 lg:px-8 bg-base-300">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Professional <span className="text-primary">Training</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Structured learning journey from programming fundamentals to
            advanced full-stack development
          </p>
        </div>

        {/* COURSES */}
        <div className="space-y-8">
          {courses.map((course, index) => {
            const colors = colorMap[course.color];

            return (
              <div
                key={index}
                className={`bg-base-200 border border-base-content/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/30 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* HEADER */}
                <div
                  className={`bg-gradient-to-r ${colors.gradient} p-6 md:p-8 border-b border-base-content/10`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-md ${colors.bg} flex items-center justify-center ${colors.text} text-2xl`}
                    >
                      <img
                        src={course.icon}
                        alt={course.title}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-base-content">
                        {course.title}
                      </h3>
                      <p className="text-base-content/70">
                        {course.provider} • {course.period}
                      </p>

                      <span className="text-sm text-primary font-medium">
                        {course.status}
                      </span>
                    </div>
                  </div>

                  {/* TECH ICONS */}
                  <div className="flex gap-3 mt-4 ml-[72px]">
                    {course.techIcons.map((TechIcon, i) => (
                      <div
                        key={i}
                        className="text-3xl hover:scale-110 transition-transform duration-300"
                      >
                        <TechIcon />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                  {/* SKILLS */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FaCode className="text-primary" />
                      Skills Learned
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-base-300 text-sm rounded-lg border border-base-content/10 hover:border-primary/40 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACHIEVEMENTS */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FaCertificate className="text-primary" />
                      Achievements
                    </h4>

                    <ul className="space-y-2">
                      {course.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-base-content/70 flex gap-2"
                        >
                          <span className="text-primary mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div
          className={`mt-16 bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex gap-4">
            <FaGraduationCap className="text-primary text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Continuous Growth Mindset
              </h3>
              <p className="text-base-content/70">
                From fundamentals to advanced full-stack systems, every stage
                built my ability to think like a developer, not just a coder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
