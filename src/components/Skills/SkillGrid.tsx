import { Skills } from "@/types/skills";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skills[];
};
export default function SkillGrid({ skills }: Props) {
  return (
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-14">
      {skills.map((skill) => (
        <li key={skill.stack}>
          <SkillCard skill={skill} />
        </li>
      ))}
    </ul>
  );
}
