import { Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import educareLogo from "../assets/screenshots/educare/educare-logo.png";
import educareImage1 from "../assets/screenshots/educare/image1.png";
import educareImage2 from "../assets/screenshots/educare/image2.png";
import educareImage3 from "../assets/screenshots/educare/image3.png";
import educareImage4 from "../assets/screenshots/educare/image4.png";

import cooksyLogo from "../assets/screenshots/cooksy/cooksy-logo.png";
import cooksyImage1 from "../assets/screenshots/cooksy/image1.png";
import cooksyImage2 from "../assets/screenshots/cooksy/image2.png";
import cooksyImage3 from "../assets/screenshots/cooksy/image3.png";
import cooksyImage4 from "../assets/screenshots/cooksy/image4.png";

import bdlawyerLogo from "../assets/screenshots/bdlawyer/bd-lawyer-logo.png";
import bdlawyerImage1 from "../assets/screenshots/bdlawyer/image1.png";
import bdlawyerImage2 from "../assets/screenshots/bdlawyer/image2.png";
import bdlawyerImage3 from "../assets/screenshots/bdlawyer/image3.png";
import bdlawyerImage4 from "../assets/screenshots/bdlawyer/image4.png";

const projects = [
  {
    name: "Educare – E-Learning Platform",
    logo: educareLogo,
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
    logo: cooksyLogo,
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
    logo: bdlawyerLogo,
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-base-200 py-20 px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="mb-12 space-y-3 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-serif">
          Projects
        </h2>
        <p className="text-primary max-w-3xl mx-auto text-lg font-normal leading-relaxed tracking-wide font-sans">
          Here are some of the projects I’ve built using modern tools and
          technologies.
        </p>
      </div>

      <div className="flex flex-col space-y-16">
        {projects.map((project) => (
          <Zoom triggerOnce direction="up" key={project.name}>
            <div className="flex flex-col lg:flex-row bg-base-100 rounded-3xl shadow-lg border-2 border-secondary overflow-hidden">
              {/* Image Carousel */}
              <div className="relative lg:w-1/2 bg-base-200 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  className="w-full h-full"
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        className="w-full object-contain h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[500px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={project.logo} alt="logo" className="w-10 h-10" />
                    <h3 className="text-2xl font-extrabold text-primary font-serif">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-primary text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-secondary mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1 bg-gradient-to-r from-primary to-accent text-sm font-semibold text-base-200 rounded-full shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-base-200 px-6 py-2 rounded-full font-semibold hover:bg-accent/90"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-secondary text-primary px-6 py-2 rounded-full font-semibold hover:bg-secondary hover:text-base-200"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default Projects;
