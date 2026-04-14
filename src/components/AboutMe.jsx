import { useEffect, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-base-200">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Full-stack developer focused on building scalable systems with clean
            architecture and real-world impact
          </p>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-base-300/50 rounded-2xl p-8 md:p-12 border border-base-content/10 hover:border-primary/30 transition-all duration-300">
            <div className="space-y-8 text-base md:text-lg text-base-content/80 leading-relaxed">
              {/* Intro */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  My Journey
                </h3>

                <p>
                  I started my career outside of software development, working
                  in banking and data-related roles where I developed strong
                  discipline, analytical thinking, and attention to detail.
                </p>

                <p className="mt-2">
                  Even though I completed my B.Sc in Computer Science &
                  Engineering in 2018, it took me time to fully commit to
                  development—and when I did in 2024, I approached it with
                  complete focus and consistency.
                </p>
              </div>

              {/* Transition */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Transition to Development
                </h3>

                <p>
                  I rebuilt my foundation from the ground up—starting with C,
                  C++, Data Structures, and Algorithms—then moving into
                  full-stack development with modern technologies.
                </p>

                <p className="mt-2">
                  Through structured learning and hands-on projects, I developed
                  real-world applications focusing on authentication systems,
                  REST APIs, and scalable backend architecture.
                </p>
              </div>

              {/* Current Focus */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  What I Do Now
                </h3>

                <p>
                  I build production-ready web applications using Next.js,
                  React, Node.js, and TypeScript. I also work with PostgreSQL,
                  Prisma ORM, and MongoDB to design efficient and scalable data
                  systems.
                </p>

                <p className="mt-2">
                  My focus is not just writing code, but building systems that
                  are clean, maintainable, and aligned with real-world business
                  needs.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-primary/20">
                <blockquote className="text-xl md:text-2xl font-medium text-primary italic text-center">
                  From structured banking systems to scalable software systems.
                </blockquote>
              </div>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-base-200 rounded-xl p-5 text-center border border-primary/20 hover:shadow-md transition">
                  <div className="text-3xl font-bold text-primary mb-1">
                    2018
                  </div>

                  <div className="text-sm text-base-content/70">
                    CSE Graduate
                  </div>
                </div>

                <div className="bg-base-200 rounded-xl p-5 text-center border border-primary/20 hover:shadow-md transition">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>

                  <div className="text-sm text-base-content/70">
                    Production Projects
                  </div>
                </div>

                <div className="bg-base-200 rounded-xl p-5 text-center border border-primary/20 hover:shadow-md transition">
                  <div className="text-3xl font-bold text-primary mb-1">
                    TypeScript
                  </div>

                  <div className="text-sm text-base-content/70">
                    Primary Language
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
