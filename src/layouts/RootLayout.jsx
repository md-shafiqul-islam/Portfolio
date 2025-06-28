import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Hero />
        <AboutMe />
      </main>

      <footer></footer>
    </div>
  );
};

export default RootLayout;
