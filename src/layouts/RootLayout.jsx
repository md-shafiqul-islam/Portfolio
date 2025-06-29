import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const RootLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
      </main>

      <footer></footer>
    </div>
  );
};

export default RootLayout;
