import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";

export default function Home() {
  return (
    <section id="home">
      <AboutPage />
      {/* <SkillsPage /> */}
      <ProjectsPage />
      <ContactPage />
    </section>
  );
}
