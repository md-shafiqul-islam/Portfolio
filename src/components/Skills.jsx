import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaServer,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import { Fade } from "react-awesome-reveal";

const skills = {
  Proficient: [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, stars: 5 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, stars: 5 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#38BDF8]" />,
      stars: 5,
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui className="text-[#D6BD98]" />,
      stars: 4,
    },
    {
      name: "JavaScript (ES6+)",
      icon: <FaJs className="text-[#F7DF1E]" />,
      stars: 4,
    },
    {
      name: "DOM Manipulation",
      icon: <FaJs className="text-[#D6BD98]" />,
      stars: 4,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-[#61DAFB]" />,
      stars: 4,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-[#D6BD98]" />,
      stars: 4,
    },
    { name: "REST APIs", icon: <FaJs className="text-[#D6BD98]" />, stars: 4 },
    {
      name: "JWT Authentication",
      icon: <FaLock className="text-[#D6BD98]" />,
      stars: 4,
    },
  ],

  Familiar: [
    { name: "Node.js", icon: <FaNode className="text-[#339933]" />, stars: 3 },
    {
      name: "Express.js",
      icon: <SiExpress className="text-[#FFFFFF]" />,
      stars: 3,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      stars: 3,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      stars: 3,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      stars: 3,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-[#FFCA28]" />,
      stars: 3,
    },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, stars: 3 },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, stars: 2 },
    {
      name: "Postman",
      icon: <SiPostman className="text-[#FF6C37]" />,
      stars: 3,
    },
    {
      name: "Thunder Client",
      icon: <FaServer className="text-[#1A1A1A]" />,
      stars: 3,
    },
  ],
};

const StarRating = ({ count }) => (
  <div className="flex space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${i < count ? "text-accent" : "text-base-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Fade triggerOnce direction="up" damping={0.3}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              Skills
            </h2>

            <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/80 leading-snug max-w-2xl mx-auto">
              The tools, frameworks, and technologies I use to turn ideas into
              fast, functional, and beautiful web experiences.
            </p>
          </div>
        </Fade>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Proficient */}
          <Fade triggerOnce direction="up" damping={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-accent">
                🚀 <span>Proficient In</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.Proficient.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-base-300/40 border border-base-300/60 rounded-xl px-4 py-3 hover:border-accent/60 hover:bg-base-200/60 transition-all duration-300"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-text-accent">
                        {skill.name}
                      </h4>
                      <StarRating count={skill.stars} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Familiar */}
          <Fade triggerOnce direction="up" damping={0.2} delay={150}>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-accent">
                🛠 <span>Familiar With</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.Familiar.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-base-300/40 border border-base-300/60 rounded-xl px-4 py-3 hover:border-accent/60 hover:bg-base-200/60 transition-all duration-300"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-text-accent">
                        {skill.name}
                      </h4>
                      <StarRating count={skill.stars} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
