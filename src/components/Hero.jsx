import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiArrowDownCircle } from "react-icons/hi2";
import heroImage from "../assets/profile/pic-1.PNG";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-[90vh] md:min-h-[85vh] lg:min-h-[70vh] p-4 md:p-6 lg:p-8 bg-primary"
    >
      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse justify-center items-center gap-8 md:gap-10 lg:flex-row lg:justify-between">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-start space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-accent">
            Md. Shafiqul Islam
          </h1>

          <h2 className="text-base md:text-lg lg:text-xl font-semibold md:font-bold text-accent">
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer (MERN)"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                cursor: "_",
              }}
            />
          </h2>

          <p className="text-sm md:text-base font-medium text-text-accent/90 leading-relaxed">
            Craft MERN stack apps that are <br /> fast, clean, and reliable.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-3 md:gap-4 flex-wrap">
            <a
              href="https://github.com/md-shafiqul-islam"
              target="_blank"
              className="btn btn-secondary rounded-full text-text-accent text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mdshafiqulislam1/"
              target="_blank"
              className="btn btn-secondary rounded-full text-text-accent text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/shafiqul3558"
              target="_blank"
              className="btn btn-secondary rounded-full text-text-accent text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <div className="pt-2">
            <a
              href="/Md_Shafiqul_Islam_Resume.pdf"
              download="Md-Shafiqul-Islam-Resume"
              className="btn btn-accent text-base-200 rounded-full px-6 md:px-8 hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <img
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-secondary shadow-lg hover:scale-105 transition-transform duration-500"
            src={heroImage}
            alt="Md. Shafiqul Islam Profile"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        className="animate-bounce bg-accent text-base-200 text-4xl p-2 rounded-full shadow-lg hover:bg-secondary/90 transition duration-300 border-2 border-accent cursor-pointer mt-6 md:mt-8 lg:mt-10"
        title="Scroll Down"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex items-center justify-center"
        >
          <HiArrowDownCircle />
        </Link>
      </button>
    </section>
  );
};

export default Hero;
