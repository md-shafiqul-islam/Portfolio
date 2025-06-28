import Typewriter from "typewriter-effect";
import { motion as Motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import heroImage from "../assets/Profile/pic-1.PNG";

const textStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <Motion.section
      id="hero"
      className="bg-primary flex flex-col justify-center items-center min-h-[80vh] p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full gap-10">
        {/* Left Content */}
        <Motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          variants={textStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Motion.h1
            className="text-4xl lg:text-5xl font-extrabold text-secondary"
            variants={textItem}
          >
            Md. Shafiqul Islam
          </Motion.h1>

          <Motion.h2
            className="text-xl lg:text-2xl font-semibold text-secondary"
            variants={textItem}
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "JavaScript Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: "_",
              }}
            />
          </Motion.h2>

          <Motion.p className="text-lg text-secondary" variants={textItem}>
            I build responsive, fast, and secure web applications using the MERN
            stack. Passionate about building clean UI and powerful backend
            solutions.
          </Motion.p>

          {/* Social Icons */}
          <Motion.div
            className="flex justify-center lg:justify-start gap-4 flex-wrap"
            variants={textItem}
          >
            <Motion.a
              href="https://github.com/sniekdho"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </Motion.a>

            <Motion.a
              href="https://www.linkedin.com/in/md-shafiqul-islam-754a19183/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </Motion.a>

            <Motion.a
              href="https://www.facebook.com/sniekdho.shafiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF />
            </Motion.a>
          </Motion.div>

          {/* Download Resume */}
          <Motion.a
            href="/resume.pdf"
            download="Md-Shafiqul-Islam-Resume"
            className="btn btn-accent text-white rounded-md px-10 hover:shadow-lg mt-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </Motion.a>
        </Motion.div>

        {/* Right Image */}
        <Motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ x: 50, opacity: 0, rotate: 5, filter: "blur(4px)" }}
          animate={{ x: 0, opacity: 1, rotate: 0, filter: "blur(0)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className="w-52 h-52 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg border-4 border-secondary hover:shadow-[0_0_25px_#d6a553] transition-shadow duration-500"
            src={heroImage}
            alt="Md. Shafiqul Islam Profile Picture"
            aria-label="Visit GitHub Profile"
          />
        </Motion.div>
      </div>

      {/* Scroll Indicator (Optional but Stylish) */}
      <Link to="about" smooth={true} duration={500}>
        <div className="mt-8 text-secondary animate-bounce cursor-pointer">
          <span className="text-xl">↓</span>
        </div>
      </Link>
    </Motion.section>
  );
};

export default Hero;
