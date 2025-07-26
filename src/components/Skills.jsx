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
  SiMongodb,
  SiExpress,
  SiVite,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

import { Zoom } from "react-awesome-reveal";

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
      name: "JavaScript",
      icon: <FaJs className="text-[#F7DF1E]" />,
      stars: 4,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-[#61DAFB]" />,
      stars: 4,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-[#181717]" />,
      stars: 4,
    },
  ],
  Familiar: [
    { name: "Node.js", icon: <FaNode className="text-[#339933]" />, stars: 3 },
    {
      name: "Express.js",
      icon: <SiExpress className="text-[#000000]" />,
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
  ],
};

// Star Rating Component
const StarRating = ({ count }) => (
  <div className="flex space-x-0.5">
    {[...Array(5)].map((_, i) =>
      i < count ? (
        <span key={i} className="text-secondary text-sm">
          ★
        </span>
      ) : (
        <span key={i} className="text-base-300 text-sm">
          ☆
        </span>
      )
    )}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-base-200 py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Skills
          </h2>
          <p className="text-primary text-base sm:text-lg font-normal leading-snug max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and efficient web
            apps.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-10 text-left">
          {/* Proficient Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              🚀 <span>Proficient In</span>
            </h3>

            <div className="space-y-5">
              {skills.Proficient.map((skill, i) => (
                <Zoom
                  key={skill.name}
                  delay={i * 60}
                  duration={500}
                  triggerOnce
                >
                  <div className="group p-6 rounded-3xl bg-base-100 border border-base-300 shadow-md flex items-center gap-5 transition-transform duration-300 hover:scale-[1.03]">
                    <div
                      className="text-4xl tooltip tooltip-top"
                      data-tip={skill.name}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition duration-300">
                        {skill.name}
                      </h4>
                      <StarRating count={skill.stars} />
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>

          {/* Familiar Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              🛠 <span>Familiar With</span>
            </h3>

            <div className="space-y-5">
              {skills.Familiar.map((skill, i) => (
                <Zoom
                  key={skill.name}
                  delay={i * 60}
                  duration={500}
                  triggerOnce
                >
                  <div className="group p-6 rounded-3xl bg-base-100 border border-base-300 shadow-md flex items-center gap-5 transition-transform duration-300 hover:scale-[1.03]">
                    <div
                      className="text-4xl tooltip tooltip-top"
                      data-tip={skill.name}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition duration-300">
                        {skill.name}
                      </h4>
                      <StarRating count={skill.stars} />
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
