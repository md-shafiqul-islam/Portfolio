import { Zoom } from "react-awesome-reveal";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

const educationData = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2014 – 2018",
    program: "Regular Program",
    result: "CGPA: 3.08 / 4.00",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-text-accent">
            Education
          </h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/70 leading-relaxed max-w-2xl mx-auto font-sans">
            A strong academic foundation that shaped how I think, analyze, and
            approach real-world challenges.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-12 sm:gap-14 md:gap-16">
          {educationData.map((edu, i) => (
            <Zoom key={i} triggerOnce>
              <div className="relative group bg-base-300/40 border border-accent/30 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Accent */}
                <span className="absolute -top-3 left-8 w-8 h-8 bg-gradient-to-tr from-secondary to-accent rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left Side */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-accent text-3xl" />
                      <h3 className="text-lg font-bold text-text-accent font-serif">
                        {edu.title}
                      </h3>
                    </div>

                    <div className="space-y-1 text-sm sm:text-base">
                      <p className="flex items-center gap-2 text-text-accent font-medium">
                        <FaSchool className="text-accent" />
                        {edu.institution}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent">
                        <FaMapMarkerAlt className="text-accent" />
                        {edu.location}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent font-medium">
                        <FaCalendarAlt className="text-accent" />
                        {edu.period}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent">
                        <FaCertificate className="text-accent" />
                        {edu.program}
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="self-start md:self-center">
                    <span className="inline-block bg-gradient-to-r from-accent to-secondary text-base-200 font-semibold text-sm sm:text-base px-6 py-2 rounded-xl shadow-sm tracking-wide">
                      {edu.result}
                    </span>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
