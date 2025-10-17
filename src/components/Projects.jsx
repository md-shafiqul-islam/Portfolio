import { Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Assets
import craftflowLogo from "../assets/screenshots/craftflow/craftflow-logo.png";
import craftflowImage1 from "../assets/screenshots/craftflow/image1.png";
import craftflowImage2 from "../assets/screenshots/craftflow/image2.png";
import craftflowImage3 from "../assets/screenshots/craftflow/image3.png";
import craftflowImage4 from "../assets/screenshots/craftflow/image4.png";

import educareLogo from "../assets/screenshots/educare/educare-logo.png";
import educareImage1 from "../assets/screenshots/educare/image1.png";
import educareImage2 from "../assets/screenshots/educare/image2.png";
import educareImage3 from "../assets/screenshots/educare/image3.png";
import educareImage4 from "../assets/screenshots/educare/image4.png";

import cooksyLogo from "../assets/screenshots/cooksy/cooksy-logo.png";
import cooksyImage1 from "../assets/screenshots/cooksy/image1.png";
import cooksyImage2 from "../assets/screenshots/cooksy/image2.png";
import cooksyImage3 from "../assets/screenshots/cooksy/image3.png";

const projects = [
  {
    name: "CraftFlow",
    tag: "Employee Management System",
    logo: craftflowLogo,
    description:
      "A full-stack system to manage tasks, payroll, and attendance - with dedicated dashboards for Admin, HR, and Employees.",
    features: [
      "Role-based dashboards",
      "Task management with full CRUD operations",
      "Integrated payroll with Stripe payments",
    ],
    live: "https://craft-flow.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/craftflow-client",
    serverRepo: "https://github.com/md-shafiqul-islam/craftflow-server",
    images: [
      craftflowImage1,
      craftflowImage2,
      craftflowImage3,
      craftflowImage4,
    ],
  },
  {
    name: "EduCare",
    tag: "Educational Service Platform",
    logo: educareLogo,
    description:
      "A role-based learning platform that connects educators and learners with booking, dashboards, and real-time controls.",
    features: [
      "Service booking & complete CRUD workflow",
      "Google OAuth & route protection",
      "Light/dark theme and fully responsive layout",
    ],
    live: "https://educare-9e09b.web.app",
    clientRepo: "https://github.com/md-shafiqul-islam/educare-client",
    serverRepo: "https://github.com/md-shafiqul-islam/educare-server",
    images: [educareImage1, educareImage2, educareImage3, educareImage4],
  },
  {
    name: "CookSy",
    tag: "Recipe Sharing App",
    logo: cooksyLogo,
    description:
      "A clean, interactive recipe app where users can share, filter, and save their favorite dishes with personalized authentication.",
    features: [
      "Add, edit, and delete recipes easily",
      "Filter recipes by cuisine or category",
      "Firebase authentication with JWT integration",
    ],
    live: "https://cooksy.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/cooksy-client",
    serverRepo: "https://github.com/md-shafiqul-islam/cooksy-server",
    images: [cooksyImage1, cooksyImage2, cooksyImage3],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/80 leading-snug max-w-2xl mx-auto">
            Real-world projects built with performance, usability, and modern
            design in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Zoom key={project.name} triggerOnce>
              <div className="group bg-base-300/40 border border-base-300/40 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-sm">
                {/* Image Slider */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full h-full"
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${project.name} screenshot ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-3">
                  {/* Logo & Title */}
                  <div className="flex items-center gap-3">
                    <img src={project.logo} alt="logo" className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold text-accent brightness-150">
                        {project.name}
                      </h3>
                      <p className="text-sm text-accent">{project.tag}</p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-text-accent/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="list-disc list-inside text-sm text-text-accent/80 space-y-1 mt-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="leading-snug">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between px-6 pb-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-base-100 px-4 py-2 rounded-full font-semibold text-sm hover:bg-accent/80 transition-colors"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-accent/50 text-text-accent px-3 py-2 rounded-full font-semibold text-sm hover:bg-accent hover:text-primary transition-colors"
                    >
                      <FaGithub />
                    </a>
                    {project.serverRepo && (
                      <a
                        href={project.serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-accent/50 text-text-accent px-3 py-2 rounded-full font-semibold text-sm hover:bg-accent hover:text-primary transition-colors"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
