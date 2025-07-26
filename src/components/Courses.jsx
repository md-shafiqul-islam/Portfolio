import { Slide, Zoom } from "react-awesome-reveal";
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
    program: "Fundamentals of programming and problem solving",
    result:
      "Strong foundation in programming concepts and algorithmic thinking",
  },
  {
    title: "Programming Hero - Complete Web Development",
    institution: "Programming Hero",
    location: "Online",
    period: "Jan 2025 – Jul 2025",
    program: "Full-stack Web Development Bootcamp",
    result: "Hands-on projects using modern JavaScript and React ecosystem",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="bg-base-300 py-20 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-serif">
            Courses
          </h2>

          <p className="text-primary text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto tracking-wide font-sans">
            Continuous learning through hands-on courses to stay sharp and
            ahead.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {coursesData.map((course, i) => {
            const cardContent = (
              <div className="w-full bg-base-200 rounded-3xl p-8 border-2 border-secondary shadow-lg shadow-secondary/30 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_#d6a553cc] cursor-default flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-secondary mb-6">
                    <FaGraduationCap className="text-accent text-3xl" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary font-serif tracking-tight">
                      {course.title}
                    </h3>
                  </div>

                  <p className="flex items-center gap-2 text-secondary text-sm font-semibold font-sans mb-1">
                    <FaSchool className="text-accent" />
                    {course.institution}
                  </p>

                  <p className="flex items-center gap-2 text-primary text-sm font-normal font-sans mb-1">
                    <FaMapMarkerAlt className="text-accent" />
                    {course.location}
                  </p>

                  <p className="flex items-center gap-2 text-secondary text-sm font-semibold font-sans mb-1">
                    <FaCalendarAlt className="text-accent" />
                    {course.period}
                  </p>

                  <p className="flex items-center gap-2 text-primary text-sm font-normal font-sans">
                    <FaCertificate className="text-accent" />
                    {course.program}
                  </p>
                </div>

                <div className="mt-6 self-start bg-accent/20 text-accent font-semibold text-sm sm:text-base py-1.5 px-6 rounded-full tracking-wide select-none font-sans shadow-md">
                  {course.result}
                </div>
              </div>
            );

            if (i % 2 === 0) {
              return (
                <Slide key={i} direction="left" triggerOnce>
                  {cardContent}
                </Slide>
              );
            } else {
              return (
                <Zoom key={i} triggerOnce>
                  {cardContent}
                </Zoom>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
