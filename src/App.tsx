import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { Marquee } from "./components/portfolio/Marquee";
import { Highlights } from "./components/portfolio/Highlights";
import { About } from "./components/portfolio/About";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Certifications } from "./components/portfolio/Certifications";
import { Education } from "./components/portfolio/Education";
import { GithubStats } from "./components/portfolio/GithubStats";
import { Contact } from "./components/portfolio/Contact";

function App() {
  return (
    <main className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Highlights />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <GithubStats />
      <Contact />
    </main>
  );
}

export default App;