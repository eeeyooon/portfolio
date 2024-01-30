import Onboard from "@/components/Home/Onboard";
import AboutPage from "./about/page";
import FeaturedProjectsPage from "@/components/Projects/FeaturedProjects";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";

export default function Home() {
  return (
    <section id="home">
      <Onboard />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </section>
  );
}
