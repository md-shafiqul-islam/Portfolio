import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import educareImage1 from "../assets/screenshots/educare/image1.png";
import educareImage2 from "../assets/screenshots/educare/image2.png";
import educareImage3 from "../assets/screenshots/educare/image3.png";
import educareImage4 from "../assets/screenshots/educare/image4.png";

import cooksyImage1 from "../assets/screenshots/cooksy/image1.png";
import cooksyImage2 from "../assets/screenshots/cooksy/image2.png";
import cooksyImage3 from "../assets/screenshots/cooksy/image3.png";
import cooksyImage4 from "../assets/screenshots/cooksy/image4.png";

import bdlawyerImage1 from "../assets/screenshots/bdlawyer/image1.png";
import bdlawyerImage2 from "../assets/screenshots/bdlawyer/image2.png";
import bdlawyerImage3 from "../assets/screenshots/bdlawyer/image3.png";
import bdlawyerImage4 from "../assets/screenshots/bdlawyer/image4.png";

const projects = [
  {
    name: "Educare – E-Learning Platform",
    description:
      "An education-focused web application offering categorized courses and interactive dashboards for students and admins.",
    features: [
      "Dynamic course listing with filters by category and popularity",
      "Student dashboard to manage enrollments and progress",
      "Admin panel for managing users, courses, and reports",
    ],
    tech: ["React", "Express.js", "MongoDB", "JWT Authentication"],
    live: "https://edu-care978.netlify.app/",
    code: "https://github.com/sniekdho/EduCare-Client",
    images: [educareImage1, educareImage2, educareImage3, educareImage4],
  },
  {
    name: "CookSy - Recipe Web App",
    description:
      "A full-featured MERN-style app allowing users to explore, add, edit, and delete recipes with role-based access.",
    features: [
      "User & Admin authentication with Firebase",
      "CRUD functionality for recipes (including images)",
      "Search, filter, and sort recipes by category",
    ],
    tech: ["React", "React Router", "Express.js", "Firebase Auth"],
    live: "https://cooksy.netlify.app/",
    code: "https://github.com/sniekdho/cooksy-client",
    images: [cooksyImage1, cooksyImage2, cooksyImage3, cooksyImage4],
  },
  {
    name: "BDLawyer – Legal Consultation Platform",
    description:
      "A lawyer service directory and booking platform allowing users to find, review, and contact legal professionals across Bangladesh.",
    features: [
      "Lawyer directory with categories and specialization filters",
      "Booking form with date, time, and message validation",
      "Responsive UI and intuitive layout for client usability",
    ],
    tech: ["React", "React Router", "TailwindCSS", "DaisyUI"],
    live: "https://bd-lawyer.netlify.app/",
    code: "https://github.com/sniekdho/BD-Lawyer",
    images: [bdlawyerImage1, bdlawyerImage2, bdlawyerImage3, bdlawyerImage4],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const imageVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndices = [...prev];
        projects.forEach((proj, idx) => {
          newIndices[idx] = (newIndices[idx] + 1) % proj.images.length;
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeImage = (projIdx, direction) => {
    setCurrentIndex((prev) => {
      const newIndices = [...prev];
      const length = projects[projIdx].images.length;
      if (direction === "next") {
        newIndices[projIdx] = (newIndices[projIdx] + 1) % length;
      } else {
        newIndices[projIdx] = (newIndices[projIdx] - 1 + length) % length;
      }
      return newIndices;
    });
  };

  return (
    <Motion.section
      id="projects"
      className="bg-base-200 py-20 px-6 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Updated heading container */}
      <div className="mb-12 space-y-3 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-serif">
          Projects
        </h2>
        <p className="text-primary max-w-3xl mx-auto text-lg font-normal leading-relaxed tracking-wide font-sans">
          Here are some of the projects I’ve built using modern tools and
          technologies.
        </p>
      </div>

      <div className="flex flex-col space-y-16 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <Motion.div
            key={project.name}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row bg-base-100 rounded-3xl shadow-lg border-2 border-secondary overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-[0_0_25px_#d6a553cc] duration-300 ease-out"
          >
            {/* Left: Image slider */}
            <div className="relative lg:w-1/2 flex items-center justify-center bg-base-200">
              <AnimatePresence initial={false} mode="wait">
                <Motion.img
                  key={project.images[currentIndex[i]]}
                  src={project.images[currentIndex[i]]}
                  alt={`${project.name} screenshot ${currentIndex[i] + 1}`}
                  className="object-contain w-full h-72 lg:h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none select-none"
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  draggable={false}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                aria-label="Previous image"
                onClick={() => changeImage(i, "prev")}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-accent/70 text-base-200 p-2 rounded-full hover:bg-accent transition"
              >
                <FaChevronLeft />
              </button>
              <button
                aria-label="Next image"
                onClick={() => changeImage(i, "next")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-accent/70 text-base-200 p-2 rounded-full hover:bg-accent transition"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Right: Project details */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-extrabold text-primary mb-4">
                  {project.name}
                </h3>
                <p className="text-primary text-lg mb-6 leading-relaxed font-sans tracking-wide">
                  {project.description}
                </p>

                <ul className="mb-8 list-disc list-inside text-secondary text-base space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gradient-to-r from-primary to-accent text-base-200 font-semibold px-4 py-2 rounded-full text-sm font-sans tracking-wide shadow-md cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent text-base-200 px-6 py-2 rounded-full font-semibold tracking-wide hover:bg-accent/90 transition"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-secondary text-primary px-6 py-2 rounded-full font-semibold tracking-wide hover:bg-secondary hover:text-base-200 transition"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.section>
  );
};

export default Projects;
