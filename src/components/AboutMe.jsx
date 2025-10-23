import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Fade triggerOnce direction="up" damping={0.3}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Me
              </span>
            </h2>

            <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/80 leading-snug max-w-2xl mx-auto">
              A developer who fell in love with coding and turned that passion
              into purpose.
            </p>
          </div>
        </Fade>

        {/* Content */}
        <Fade triggerOnce direction="up" damping={0.2}>
          <div className="relative bg-base-300/40 rounded-2xl shadow-lg backdrop-blur-sm p-6 md:p-10 lg:p-12 border border-base-300/40 transition-colors duration-300 hover:border-accent/60">
            <div className="space-y-6 md:space-y-7 lg:space-y-8 text-base md:text-lg lg:text-xl leading-relaxed tracking-normal text-justify">
              <p>
                A{" "}
                <span className="font-semibold text-accent">
                  passionate web developer and Computer Science graduate
                </span>{" "}
                from <b>Daffodil International University (CSE, 2018)</b>.
              </p>

              <p>
                My journey wasn’t straightforward - I worked in non-tech roles
                for several years, but I never stopped chasing my dream of
                becoming a software developer. While working full-time, I taught
                myself programming, starting with Java, then building a strong
                base in <strong>C, C++, Data Structures, and Algorithms</strong>{" "}
                through <b>Phitron</b>. Later, I deepened my skills in modern
                web development through the <b>Programming Hero</b> course.
              </p>

              <p>
                My approach is simple: <strong>I learn by building.</strong>{" "}
                Every project I create has a purpose - whether it’s{" "}
                <strong>improving performance</strong>,{" "}
                <strong>experimenting with new tools</strong>, or{" "}
                <strong>digging deeper into backend logic</strong>.
              </p>

              <p>
                Now, I’m focused on crafting clean, functional, and
                user-centered web applications. I’m continuously learning,
                improving, and working toward becoming a{" "}
                <strong>skilled software engineer</strong> who creates solutions
                that truly matter.
              </p>

              <p className="text-text-accent/90 italic border-l-4 border-accent pl-3 sm:pl-4">
                In short: I’m not just learning to code - I’m building a life
                out of it.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutMe;
