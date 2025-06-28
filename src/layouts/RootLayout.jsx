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
      </main>

      <footer></footer>
    </div>
  );
};

export default RootLayout;
