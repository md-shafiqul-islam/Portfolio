import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import quantanite from "../assets/jobs/quantanite.jpeg";
import trustBank from "../assets/jobs/trustbank.jpeg";

const colorMap = {
  primary: {
    dot: "bg-primary",
    icon: "text-primary",
    bg: "bg-primary/20",
  },
  secondary: {
    dot: "bg-secondary",
    icon: "text-secondary",
    bg: "bg-secondary/20",
  },
  accent: {
    dot: "bg-accent",
    icon: "text-accent",
    bg: "bg-accent/20",
  },
};

const iconMap = {
  dev: <FaGraduationCap />,
  trustBank: trustBank,
  quantanite: quantanite,
};

const renderIcon = (exp) => {
  const icon = iconMap[exp.iconType];

  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt={exp.company}
        className="w-full h-full object-contain p-1"
      />
    );
  }

  return icon;
};

const Experiences = () => {
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

    const element = document.getElementById("experiences");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const experiences = [
    {
      year: "2024 - Present",
      duration: "1+ years",
      role: "Full Stack Web Developer",
      company: "Independent Learning Path",
      description:
        "Transitioned into full-stack development through structured learning and real-world projects. Focused on React ecosystem, backend APIs, authentication systems, and scalable architecture.",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Auth",
        "Stripe",
      ],
      iconType: "dev",
      color: "primary",
    },
    {
      year: "Aug 2021 - Nov 2024",
      duration: "3+ years",
      role: "Cash Officer",
      company: "Trust Bank PLC",
      description:
        "Handled high-volume financial transactions with strict compliance. Built strong discipline, accuracy, and problem-solving mindset in high-pressure environments.",
      skills: [
        "Financial Operations",
        "Risk Management",
        "Problem Solving",
        "Attention to Detail",
      ],
      iconType: "trustBank",
      color: "secondary",
    },
    {
      year: "Nov 2019 - Aug 2021",
      duration: "1.9 years",
      role: "Data Analyst",
      company: "Quantanite Bangladesh Ltd.",
      description:
        "Worked on structured data processing for global platforms. Ensured accuracy, consistency, and high-quality outputs under tight deadlines.",
      skills: ["Data Processing", "Quality Assurance", "Analytical Thinking"],
      iconType: "quantanite",
      color: "accent",
    },
  ];

  return (
    <section
      id="experiences"
      className="py-20 px-4 md:px-6 lg:px-8 bg-base-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            My <span className="text-primary">Journey</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            From structured roles to full-stack engineering — building
            discipline, analytical thinking, and scalable system design
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color];

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                  }}
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full ${colors.dot} border-4 border-base-300 shadow-md`}
                    />
                  </div>

                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 ${
                      index % 2 === 1 ? "md:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Year */}
                    <div
                      className={
                        index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                      }
                    >
                      <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-2">
                        {exp.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={
                        index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                      }
                    >
                      <div className="bg-base-200 rounded-2xl p-6 md:p-8 border border-base-content/10 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center ${colors.icon} text-xl shadow-sm`}
                          >
                            {renderIcon(exp)}
                          </div>

                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-base-content">
                              {exp.role}
                            </h3>
                            <p className="text-base-content/70">
                              {exp.company}
                            </p>
                            <p className="text-sm text-base-content/50">
                              {exp.duration}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base-content/70 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-base-300 text-base-content/70 text-xs rounded-full border border-base-content/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div
          className={`mt-16 bg-base-200 border border-primary/20 rounded-2xl p-8 md:p-10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              What Shapes Me
            </h3>
            <p className="text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
              My journey blends discipline from banking, analytical thinking
              from data operations, and engineering mindset from full-stack
              development — shaping how I build scalable and reliable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
