import { Fade } from "react-awesome-reveal";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

const coursesData = [
  {
    title: "Phitron - C, C++, Data Structures & Algorithms",
    institution: "Phitron, Dhaka, Bangladesh",
    location: "Online",
    period: "Apr 2024 – Oct 2024",
    program: "Fundamentals of Programming and Problem Solving",
    result:
      "Built a strong foundation in programming concepts and algorithmic thinking",
  },
  {
    title: "Programming Hero - Complete Web Development",
    institution: "Programming Hero",
    location: "Online",
    period: "Jan 2025 – Jul 2025",
    program: "Full-stack Web Development",
    result:
      "Hands-on projects with JavaScript, React, Node.js, and modern development practices",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-text-accent">
            Courses
          </h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/70 leading-relaxed max-w-2xl mx-auto font-sans">
            Practical, hands-on courses that helped me level up my skills and
            stay current with modern development trends.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-12 sm:gap-14 md:gap-16">
          {coursesData.map((course, i) => (
            <Fade key={i} direction={i % 2 === 0 ? "up" : "down"} triggerOnce>
              <div className="relative group bg-base-300/40 border border-accent/40 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Accent */}
                <span className="absolute -top-3 left-8 w-8 h-8 bg-gradient-to-tr from-secondary to-accent rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left Side */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-accent text-3xl" />
                      <h3 className="text-lg font-bold text-text-accent font-serif">
                        {course.title}
                      </h3>
                    </div>

                    <div className="space-y-1 text-sm sm:text-base">
                      <p className="flex items-center gap-2 text-text-accent font-medium">
                        <FaSchool className="text-accent" />
                        {course.institution}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent">
                        <FaMapMarkerAlt className="text-accent" />
                        {course.location}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent font-medium">
                        <FaCalendarAlt className="text-accent" />
                        {course.period}
                      </p>
                      <p className="flex items-center gap-2 text-text-accent">
                        <FaCertificate className="text-accent" />
                        {course.program}
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="self-start md:self-center">
                    <span className="inline-block bg-gradient-to-r from-accent to-secondary text-base-200 font-semibold text-sm sm:text-base px-6 py-2 rounded-xl shadow-sm tracking-wide">
                      {course.result}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
