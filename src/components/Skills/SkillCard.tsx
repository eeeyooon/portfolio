import { Skills } from "@/types/skills";

type Props = {
  skill: Skills;
};
function SkillCard({ skill: { stack, skillList } }: Props) {
  return (
    <article className="border-brown_color border-[3px] h-80">
      <h3 className="text-redbrown_color font-scoreLight text-xl text-center p-4 font-semibold my-2">
        {stack}
      </h3>
      <div>
        <ul>
          {skillList.map((skillItem, idx) => (
            <li
              key={`${stack}${idx}`}
              className=" mb-2 list-disc pl-1 ml-8 pr-4  font-scoreRegular"
            >
              {skillItem}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SkillCard;
