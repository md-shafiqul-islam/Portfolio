import { useScroll, motion as Motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useEffect } from "react";
import Aos from "aos";
import Courses from "../components/Courses";

const RootLayout = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);

  return (
    <>
      <Motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-primary/95">
          <Navbar />
        </header>

        <main className="flex-1 bg-primary/40">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Education />
          <Courses />
          <Contact />
        </main>

        <footer className="bg-primary/95">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default RootLayout;
