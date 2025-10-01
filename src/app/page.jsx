import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about">
        <BioSection />
      </div>
      <div id="projects">
        <ProjectsGrid />
      </div>
    </div>
  );
}
