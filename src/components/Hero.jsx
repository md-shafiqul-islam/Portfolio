import Typewriter from "typewriter-effect";
import { motion as Motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { HiArrowDownCircle } from "react-icons/hi2";
import heroImage from "../assets/profile/pic-1.PNG";

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
      className="bg-primary flex flex-col justify-center items-center min-h-[90vh] p-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main content */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full gap-10 z-10">
        {/* Left: Content */}
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
            className="text-xl lg:text-2xl font-semibold text-accent"
            variants={textItem}
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "JavaScript Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                cursor: "_",
              }}
            />
          </Motion.h2>

          <Motion.p className="text-lg text-secondary" variants={textItem}>
            I build responsive, fast, and secure web applications using the MERN
            stack. Passionate about clean UI and robust backend logic.
          </Motion.p>

          {/* Social Links */}
          <Motion.div
            className="flex justify-center lg:justify-start gap-4 flex-wrap"
            variants={textItem}
          >
            <Motion.a
              href="https://github.com/sniekdho"
              target="_blank"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </Motion.a>
            <Motion.a
              href="https://www.linkedin.com/in/md-shafiqul-islam-754a19183/"
              target="_blank"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </Motion.a>
            <Motion.a
              href="https://www.facebook.com/sniekdho.shafiq/"
              target="_blank"
              className="btn btn-secondary rounded-full text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF />
            </Motion.a>
          </Motion.div>

          {/* Resume Button */}
          <Motion.a
            href="/resume.pdf"
            download="Md-Shafiqul-Islam-Resume"
            className="btn btn-accent text-white rounded-md px-8 hover:shadow-xl mt-4 inline-flex items-center gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </Motion.a>
        </Motion.div>

        {/* Right: Image */}
        <Motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ x: 50, opacity: 0, rotate: 5, filter: "blur(4px)" }}
          animate={{ x: 0, opacity: 1, rotate: 0, filter: "blur(0)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.img
            className="w-52 h-52 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-secondary shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#d6a553] transition duration-500"
            src={heroImage}
            alt="Md. Shafiqul Islam Profile"
            whileHover={{ scale: 1.05 }}
          />
        </Motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <Motion.div
        className="mt-10 text-secondary text-4xl cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Link to="about" smooth={true} duration={500}>
          <HiArrowDownCircle />
        </Link>
      </Motion.div>
    </Motion.section>
  );
};

export default Hero;
