import SkillFlexbox from "@/components/skills/SkillFlexbox";
import { skillData, skills } from "../../../data/skills/skillData";
export default function SkillsPage() {
  return (
    <section id="skills" className="h-full py-24 ">
      <h2 className="text-center font-spoqa font-light text-black text-2xl md:text-2xl mb-10 ">Skills</h2>
      <SkillFlexbox skills={skillData} />
    </section>
  );
}
