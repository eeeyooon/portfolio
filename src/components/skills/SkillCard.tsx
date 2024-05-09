import { Skills } from "@/types/skills";

type Props = {
  skill: Skills;
};
function SkillCard({ skill: { stack, skillList } }: Props) {
  return (
    <article className="border-brown_color border-[3px] lg:h-80 md:h-80 w-80 sm:w-auto md:w-60 lg:w-auto h-80 mx-auto">
      <h3 className="text-redbrown_color font-scoreLight text-lg lg:text-xl md:text-base text-center p-4 font-semibold my-2">
        {stack}
      </h3>
      <div>
        <ul>
          {skillList.map((skillItem, idx) => (
            <li
              key={`${stack}${idx}`}
              className="mb-2 list-disc pl-1 ml-8 pr-4 font-scoreLight lg:text-base md:text-sm text-base text-stone-700"
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
