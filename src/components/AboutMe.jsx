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
              collaboration, and constant learning.
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
                , a Web Developer based in Bangladesh — driven by curiosity and
                a love for building things that work.
              </p>
            </Slide>

            <Slide direction="up" delay={100} triggerOnce>
              <p>
                I didn’t stumble into web development — I chose it. What drew me
                in wasn’t just the thrill of coding, but the process itself:
                taking an idea, breaking it down, and bringing it to life
                through logic and design.
              </p>
            </Slide>

            <Slide direction="up" delay={200} triggerOnce>
              <p>
                From day one, I made the decision: if I’m doing this, I’ll do it
                right. Not just tutorials — full-stack apps that solve real
                problems. Every project has pushed me to think like a developer
                who builds clean, functional, and user-focused software.
              </p>
            </Slide>

            <Slide direction="up" delay={300} triggerOnce>
              <p>
                This isn’t just a job path — it’s a career I’m shaping, one line
                of code at a time. I care about clarity, usability, and never
                shipping anything I wouldn’t use myself.
              </p>
            </Slide>

            <Slide direction="up" delay={400} triggerOnce>
              <p>
                I’m not chasing trends. I’m building skills. And I’m just
                getting started.
              </p>
            </Slide>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
