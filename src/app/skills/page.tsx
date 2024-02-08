import SkillGrid from "@/components/Skills/SkillGrid";
import { skills } from "../../../data/skill/skillData";
export default function SkillsPage() {
  return (
    <section id="skills" className="h-full py-24 selection:bg-brown_color">
      <h2 className="text-center font-dohyeon text-brown_color text-xl md:text-3xl mb-10">
        Skills
      </h2>
      <SkillGrid skills={skills} />
    </section>
  );
}
