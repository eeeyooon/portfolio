import { Projects } from "@/types/projects";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Projects;
};

export default function ProjectCard({
  project: { title, intro, startDate, endDate, category, path, stacks },
}: Props) {
  return (
    <Link href={`/projects/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full h-[240px] object-contain"
          src={`/images/projects/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-start p-4">
          <div className="flex flex-row justify-between w-full items-center mb-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="my-1 ">
              {category.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs rounded-lg px-2 mr-1  ${
                    tag === "team"
                      ? "bg-red_color"
                      : tag === "personal"
                      ? "bg-brown_color"
                      : "bg-yellow_color"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <time className=" text-gray-600 font-sm md:font-base">
            {startDate.toString()} ~ {endDate.toString()}
          </time>
          <p className="w-full truncate">{intro}</p>
          <div className="font-semibold text-xs md:text-sm text-gray-700 my-1 bg-blue-100 ">
            {stacks.map((stack) => (
              <span key={stack} className="mx-1">
                {stack}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
