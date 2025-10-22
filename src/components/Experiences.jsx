import { Fade } from "react-awesome-reveal";
import trustbank from "../assets/jobs/trustbank.jpeg";
import quantanite from "../assets/jobs/quantanite.jpeg";

const Experiences = () => {
  const experiences = [
    {
      image: trustbank,
      year: "Aug 2021 - Nov 2024",
      role: "Cash Officer",
      company: "Trust Bank PLC",
      description:
        "Managed daily cash operations, vault handling, and customer transactions. Gained problem-solving skills, time management, and client communication while ensuring regulatory compliance and accuracy.",
    },
    {
      image: quantanite,
      year: "Nov 2019 - Aug 2021",
      role: "Analyst",
      company: "Quantanite",
      description:
        "Worked in data processing, content moderation, and reporting. Developed analytical thinking, attention to detail, and professional communication skills in a fast-paced environment.",
    },
  ];

  return (
    <section
      id="experiences"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:tracking-wide">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Experiences
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-text-accent/80 leading-snug max-w-2xl mx-auto">
            From non-tech beginnings to full-stack development, here's my
            journey of learning, growth, and transition.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {experiences.map((exp, idx) => (
            <Fade
              key={idx}
              triggerOnce
              direction={idx % 2 === 0 ? "up" : "down"}
              damping={0.2}
            >
              <div className="relative bg-base-300/40 dark:bg-base-200/30 rounded-2xl shadow-lg backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10 border border-base-300/40 transition-colors duration-300 hover:border-accent/60 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="block font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      {exp.company}
                    </span>
                    <span className="block font-medium text-xs sm:text-sm md:text-base text-text-accent/90">
                      {exp.role}
                    </span>
                  </div>
                  <span className="mt-1 sm:mt-0 font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-accent">
                    {exp.year}
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-base lg:text-lg text-text-accent/90 text-justify flex-1">
                  {exp.description}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
