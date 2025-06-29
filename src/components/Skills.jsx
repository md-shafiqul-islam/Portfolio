import { motion as Motion } from "framer-motion";
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

const skillVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const skills = {
  Proficient: [
    { name: "HTML5", icon: <FaHtml5 className="text-secondary" />, stars: 5 },
    { name: "CSS3", icon: <FaCss3Alt className="text-secondary" />, stars: 5 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-accent" />,
      stars: 5,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      stars: 4,
    },
    { name: "React.js", icon: <FaReact className="text-accent" />, stars: 4 },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-primary" />,
      stars: 4,
    },
  ],
  Familiar: [
    { name: "Node.js", icon: <FaNode className="text-green-600" />, stars: 3 },
    {
      name: "Express.js",
      icon: <SiExpress className="text-primary" />,
      stars: 3,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700" />,
      stars: 3,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
      stars: 3,
    },
    { name: "Vite", icon: <SiVite className="text-purple-600" />, stars: 3 },
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, stars: 2 },
  ],
};

// Reusable star rating component
const StarRating = ({ count }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) =>
      i < count ? (
        <span key={i} className="text-secondary text-base">
          ★
        </span>
      ) : (
        <span key={i} className="text-base-300 text-base">
          ☆
        </span>
      )
    )}
  </div>
);

const Skills = () => {
  return (
    <Motion.section
      id="skills"
      className="bg-base-200 py-20 px-6 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Skills
          </h2>
          <p className="text-primary text-base sm:text-lg font-normal leading-snug max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and efficient web
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-10 text-left">
          {/* Proficient */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              🚀 <span>Proficient In</span>
            </h3>
            <div className="space-y-5">
              {skills.Proficient.map((skill, i) => (
                <Motion.div
                  key={skill.name}
                  custom={i}
                  variants={skillVariants}
                  className="group relative overflow-hidden p-6 rounded-3xl bg-base-200 backdrop-blur-lg border-2 border-secondary shadow-lg shadow-secondary/30 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_#d6a553cc] ring-1 ring-inset ring-base-100 flex items-center gap-5"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition duration-300">
                      {skill.name}
                    </h4>
                    <StarRating count={skill.stars} />
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Familiar */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              🛠 <span>Familiar With</span>
            </h3>
            <div className="space-y-5">
              {skills.Familiar.map((skill, i) => (
                <Motion.div
                  key={skill.name}
                  custom={i + skills.Proficient.length}
                  variants={skillVariants}
                  className="group relative overflow-hidden p-6 rounded-3xl bg-base-200 backdrop-blur-lg border-2 border-secondary shadow-lg shadow-secondary/30 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_#d6a553cc] ring-1 ring-inset ring-base-100 flex items-center gap-5"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition duration-300">
                      {skill.name}
                    </h4>
                    <StarRating count={skill.stars} />
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
};

export default Skills;
