import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

const Education = () => {
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

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "May 2014 – August 2018",
      cgpa: "3.08 / 4.00",
      highlights: [
        "Studied core CS fundamentals: DSA, OOP, Database Systems",
        "Built academic projects using Java, C++, and web basics",
        "Foundation that later powered full-stack development journey",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Science",
      institution: "Bogura Cantonment Public School & College",
      location: "Bogura, Bangladesh",
      period: "2010 – 2012",
      cgpa: "5.00 / 5.00",
      highlights: [
        "Achieved perfect GPA with strong Math & Physics performance",
        "Developed analytical and problem-solving mindset",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC) – Science",
      institution: "Bogura Cantonment Board High School",
      location: "Bogura, Bangladesh",
      period: "2008 – 2010",
      cgpa: "5.00 / 5.00",
      highlights: [
        "Maintained consistent academic excellence",
        "Built discipline and strong science foundation",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-6 lg:px-8 bg-base-200">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Education <span className="text-primary">Background</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Academic foundation that shaped my analytical thinking and technical
            journey
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => {
            const isTop = edu.cgpa.includes("5.00");

            return (
              <div
                key={index}
                className={`bg-base-300 border border-base-content/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left */}
                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-xl">
                        <FaGraduationCap />
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-base-content">
                          {edu.degree}
                        </h3>
                        <p className="text-base-content/70 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-base-content/70 ml-14">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="ml-14 space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-base-content/70 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* GPA */}
                  <div className="flex md:flex-col items-start md:items-center gap-3">
                    <div className="bg-base-200 border border-primary/30 rounded-xl px-6 py-4 text-center min-w-[120px]">
                      <div className="flex justify-center mb-2">
                        {isTop ? (
                          <FaTrophy className="text-yellow-500 text-lg" />
                        ) : (
                          <FaAward className="text-primary text-lg" />
                        )}
                      </div>

                      <p className="text-xl font-bold text-primary">
                        {edu.cgpa.split("/")[0].trim()}
                      </p>
                      <p className="text-xs text-base-content/60">
                        / {edu.cgpa.split("/")[1].trim()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-16 bg-base-300 border border-primary/20 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-primary text-2xl mt-1" />

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                From Theory to Real Systems
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                My academic journey built the foundation, but real growth came
                from applying those concepts in full-stack development. Today, I
                focus on building scalable, production-ready applications with
                practical engineering decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
