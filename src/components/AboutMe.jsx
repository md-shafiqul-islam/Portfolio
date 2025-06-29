import { Fade, Slide } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section id="about" className="bg-base-300 py-20 px-6 lg:px-10">
      <Fade cascade damping={0.2} triggerOnce>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              About <span className="text-accent">Me</span>
            </h2>

            <p className="text-primary text-base sm:text-lg font-normal leading-snug max-w-2xl mx-auto">
              Focused on building real-world solutions through clean code,
              teamwork, and continuous learning.
            </p>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-primary text-base sm:text-lg font-normal leading-relaxed tracking-wide">
            <Slide direction="up" triggerOnce>
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-accent underline decoration-accent/40 underline-offset-4">
                  Md. Shafiqul Islam
                </span>
                , a passionate Full-Stack MERN Developer based in Bangladesh. I
                love building clean, responsive UIs and developing robust
                backends that power modern digital experiences.
              </p>
            </Slide>

            <Slide direction="up" delay={100} triggerOnce>
              <p>
                I began my journey as a self-taught developer, diving deep into
                full-stack projects using React, Node.js, Express, and MongoDB.
                To strengthen my foundation and grow professionally, I enrolled
                in{" "}
                <span className="font-semibold text-accent">
                  Programming Hero
                </span>
                , which helped me refine both my technical and problem-solving
                skills.
              </p>
            </Slide>

            <Slide direction="up" delay={200} triggerOnce>
              <p>
                Today, I focus on writing clean, reusable code and constantly
                leveling up my skills. I'm actively seeking opportunities to
                collaborate with innovative teams where I can contribute, learn,
                and grow as a developer.
              </p>
            </Slide>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
