import { Skills } from "@/types/skills";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skills[];
};
export default function SkillGrid({ skills }: Props) {
  return (
    <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-8">
      {skills.map((skill) => (
        <li key={skill.stack}>
          <SkillCard skill={skill} />
        </li>
      ))}
    </ul>
  );
}
