import { motion as Motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Motion.section
      id="about"
      className="bg-base-200 py-20 px-6 lg:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
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
            About <span className="text-accent">Me</span>
          </h2>

          {/* Subtext (soft introduction, slightly smaller than Hero subtext) */}
          <p className="text-primary text-base sm:text-lg font-normal leading-snug max-w-2xl mx-auto">
            Focused on building real-world solutions through clean code,
            teamwork, and continuous learning.
          </p>
        </div>

        {/* Paragraphs (aligning with Hero paragraph style) */}
        <div className="space-y-6 text-primary text-base sm:text-lg font-normal leading-relaxed tracking-wide">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            Hello! I'm{" "}
            <span className="font-semibold text-accent underline decoration-accent/40 underline-offset-4">
              Md. Shafiqul Islam
            </span>
            , a passionate Full-Stack MERN Developer based in Bangladesh. I love
            building clean, responsive UIs and developing robust backends that
            power modern digital experiences.
          </Motion.p>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            I began my journey as a self-taught developer, diving deep into
            full-stack projects using React, Node.js, Express, and MongoDB. To
            strengthen my foundation and grow professionally, I enrolled in{" "}
            <span className="font-semibold text-accent">Programming Hero</span>,
            which helped me refine both my technical and problem-solving skills.
          </Motion.p>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            Today, I focus on writing clean, reusable code and constantly
            leveling up my skills. I'm actively seeking opportunities to
            collaborate with innovative teams where I can contribute, learn, and
            grow as a developer.
          </Motion.p>
        </div>
      </Motion.div>
    </Motion.section>
  );
};

export default AboutMe;
