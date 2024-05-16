import { Project } from "@/types/project";
import dynamic from "next/dynamic";
import Image from "next/image";

type Props = {
  project: Project;
  onSelectProject: (projectPath: string) => void;
};

const StackIcons = dynamic(() => import("./StackIcons"));

export default function ProjectCard({
  project: { title, intro, startDate, endDate, category, path, stacks },
  onSelectProject,
}: Props) {
  return (
    <article
      onClick={() => onSelectProject(path)}
      className="rounded-md overflow-x-hidden shadow-lg hover:shadow-xl my-4 lg:transition duration-300 lg:transform lg:hover:scale-105 cursor-pointer flex flex-col"
    >
      <div className="flex justify-center">
        <div className="relative w-[75vw] h-[55vw] sm:w-[40vw] sm:h-[30vw] md:w-[22vw] md:h-[15vw] items-center">
          <Image
            className="object-cover w-full h-full overflow-hidden absolute"
            src={`/images/projects/${path}.png`}
            alt={title}
            fill={true}
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 30vw, 22vw"
          />
        </div>
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="flex flex-row justify-between w-full items-center mb-1">
          <h3 className="text-base md:text-base font-bold ">{title}</h3>
          <div className="my-1 ">
            {category.map((tag) => (
              <span
                key={tag}
                className={`text-xs rounded-lg px-2 mr-1  ${
                  tag === "Team"
                    ? "bg-red_color"
                    : tag === "Personal"
                    ? "bg-brown_color"
                    : "bg-yellow_color"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className=" text-gray-600 text-base md:text-sm mb-1">
          {startDate.toString()} ~ {endDate.toString()}
        </p>
        <p className="w-full truncate">{intro}</p>
        <div className="flex flex-row items-center text-xs md:text-sm text-gray-700 my-2 ">
          {stacks.map((stack) => (
            <StackIcons key={stack} stack={stack} />
          ))}
        </div>
      </div>
    </article>
  );
}
