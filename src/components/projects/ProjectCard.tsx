import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";
import StackIcons from "./StackIcons";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project: { title, intro, startDate, endDate, category, path, stacks },
}: Props) {
  return (
    <Link href={`/projects/${path}`}>
      <article className="rounded-md overflow-x-hidden shadow-md hover:shadow-xl my-4 lg:transition duration-300 lg:transform lg:hover:scale-105">
        <Image
          className="w-full h-[240px] object-contain"
          src={`/images/projects/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
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
    </Link>
  );
}
