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
            <div className="space-y-6 md:space-y-7 lg:space-y-8 text-base md:text-lg leading-relaxed tracking-wide text-justify">
              <p>
                Hey, I’m{" "}
                <span className="font-semibold text-accent">
                  Md. Shafiqul Islam
                </span>
                . I graduated with a degree in Computer Science, and somewhere
                between curiosity and countless late-night debugging sessions, I
                found what I actually want to do for the rest of my life - build
                for the web.
              </p>

              <p>
                My approach is simple: I learn by building. Every project I
                create has a purpose - whether it’s improving performance,
                experimenting with new tools, or digging deeper into backend
                logic.
              </p>

              <p>
                I’m practical enough to plan, ambitious enough to dream big, and
                disciplined enough to show up every day. I’m building my career
                one line of code at a time - focused on creating meaningful
                digital experiences that truly make an impact.
              </p>

              <p className="text-text-accent/90 italic border-l-4 border-accent pl-4">
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
