import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

export default function Home() {
  return (
    <section id="home static">
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <FloatingArrowBtn />
    </section>
  );
}
