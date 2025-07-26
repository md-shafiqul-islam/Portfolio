// ProjectSection.jsx

import { Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Craftflow
import craftflowLogo from "../assets/screenshots/craftflow/craftflow-logo.png";
import craftflowImage1 from "../assets/screenshots/craftflow/image1.png";
import craftflowImage2 from "../assets/screenshots/craftflow/image2.png";
import craftflowImage3 from "../assets/screenshots/craftflow/image3.png";
import craftflowImage4 from "../assets/screenshots/craftflow/image4.png";
import craftflowImage5 from "../assets/screenshots/craftflow/image5.png";
import craftflowImage6 from "../assets/screenshots/craftflow/image6.png";
import craftflowImage7 from "../assets/screenshots/craftflow/image7.png";
import craftflowImage8 from "../assets/screenshots/craftflow/image8.png";
import craftflowImage9 from "../assets/screenshots/craftflow/image9.png";
import craftflowImage10 from "../assets/screenshots/craftflow/image10.png";

// EduCare
import educareLogo from "../assets/screenshots/educare/educare-logo.png";
import educareImage1 from "../assets/screenshots/educare/image1.png";
import educareImage2 from "../assets/screenshots/educare/image2.png";
import educareImage3 from "../assets/screenshots/educare/image3.png";
import educareImage4 from "../assets/screenshots/educare/image4.png";
import educareImage5 from "../assets/screenshots/educare/image5.png";
import educareImage6 from "../assets/screenshots/educare/image6.png";

// CookSy
import cooksyLogo from "../assets/screenshots/cooksy/cooksy-logo.png";
import cooksyImage1 from "../assets/screenshots/cooksy/image1.png";
import cooksyImage2 from "../assets/screenshots/cooksy/image2.png";
import cooksyImage3 from "../assets/screenshots/cooksy/image3.png";
import cooksyImage4 from "../assets/screenshots/cooksy/image4.png";

const projects = [
  {
    name: "CraftFlow",
    tag: "Employee Management System",
    logo: craftflowLogo,
    description:
      "Full-stack system with role-based dashboards for employees, HR, and admins to manage daily work, tasks, and payroll.",
    features: [
      "Separate dashboards for Admin, HR, and Employee",
      "Task tracking with full CRUD",
      "Payroll system integrated with Stripe",
      "Role assignment and employee verification",
      "Monthly attendance and salary reports",
    ],
    tech: {
      Frontend: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "TanStack Query",
      ],
      Backend: ["Express.js", "MongoDB", "Stripe API"],
      Auth: ["Firebase", "JWT"],
    },
    live: "https://craft-flow.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/craftflow-client",
    serverRepo: "https://github.com/md-shafiqul-islam/craftflow-server",
    images: [
      craftflowImage1,
      craftflowImage2,
      craftflowImage3,
      craftflowImage4,
      craftflowImage5,
      craftflowImage6,
      craftflowImage7,
      craftflowImage8,
      craftflowImage9,
      craftflowImage10,
    ],
  },
  {
    name: "EduCare",
    tag: "Educational Service Platform",
    logo: educareLogo,
    description:
      "Service-sharing platform for educators and learners with booking, dashboards, and role-based controls.",
    features: [
      "Service CRUD with booking workflow",
      "Google OAuth & protected routes",
      "Real-time status tracking & notifications",
      "Light/dark theme toggle",
      "Fully responsive with animations",
    ],
    tech: {
      Frontend: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Framer Motion",
        "DaisyUI",
      ],
      Backend: ["Node.js", "Express.js", "MongoDB"],
      Auth: ["Firebase", "JWT"],
    },
    live: "https://educare-9e09b.web.app",
    clientRepo: "https://github.com/md-shafiqul-islam/educare-client",
    serverRepo: "https://github.com/md-shafiqul-islam/educare-server",
    images: [
      educareImage1,
      educareImage2,
      educareImage3,
      educareImage4,
      educareImage5,
      educareImage6,
    ],
  },
  {
    name: "CookSy",
    tag: "Recipe Sharing Application",
    logo: cooksyLogo,
    description:
      "Modern recipe book app with user authentication, filters, wishlists, and a beautiful animated UI.",
    features: [
      "Add, edit, and delete your recipes",
      "Filter by cuisine and preferences",
      "Like and wishlist any recipe",
      "Google and email/password auth",
      "Animated UI with tooltips",
    ],
    tech: {
      Frontend: [
        "React",
        "Tailwind CSS",
        "React Router",
        "React Icons",
        "Lottie React",
        "React Awesome Reveal",
        "React Simple Typewriter",
        "React Tooltip",
      ],
      Backend: ["Express.js", "MongoDB"],
      Auth: ["Firebase", "JWT"],
    },
    live: "https://cooksy.netlify.app/",
    clientRepo: "https://github.com/md-shafiqul-islam/cooksy-client",
    serverRepo: "https://github.com/md-shafiqul-islam/cooksy-server",
    images: [cooksyImage1, cooksyImage2, cooksyImage3, cooksyImage4],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-base-200 py-20 px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="mb-12 space-y-3 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text font-serif">
          Projects
        </h2>
        <p className="text-primary text-lg leading-relaxed max-w-2xl mx-auto">
          Real-world apps I’ve built using modern tools and practical design.
        </p>
      </div>

      <div className="flex flex-col space-y-16">
        {projects.map((project) => (
          <Zoom key={project.name} triggerOnce direction="up">
            <div className="bg-base-100 rounded-3xl shadow-lg border-2 border-secondary overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-in-out">
              {/* Swiper */}
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  loop
                  className="w-full h-full"
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        className="w-full h-full object-fill"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Details */}
              <div className="p-8">
                {/* Title & Logo */}
                <div className="flex items-center gap-4 mb-4">
                  <img src={project.logo} alt="logo" className="w-10 h-10" />
                  <div>
                    <h3 className="text-2xl font-extrabold text-primary font-serif">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {project.tag}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-primary text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="list-disc list-inside text-secondary mb-6">
                  {project.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-col gap-4 mb-6">
                  {Object.entries(project.tech).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-base-content uppercase mb-1">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-base-100 text-xs font-medium rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-base-200 px-6 py-2 rounded-full font-semibold hover:bg-accent/90"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-secondary text-primary px-6 py-2 rounded-full font-semibold hover:bg-secondary hover:text-base-200"
                  >
                    Client <FaGithub />
                  </a>
                  {project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-secondary text-primary px-6 py-2 rounded-full font-semibold hover:bg-secondary hover:text-base-200"
                    >
                      Server <FaGithub />
                    </a>
                  )}
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
