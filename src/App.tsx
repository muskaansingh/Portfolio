import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { useScrollToHashOnMount } from "./hooks/useScrollToHashOnMount";

function App() {
  useScrollToHashOnMount();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
