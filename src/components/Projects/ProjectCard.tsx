import { Projects } from "@/types/projects";
import SampleImage from "../../../public/images/projectSample.png";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Projects;
};

export default function ProjectCard({
  project: { title, intro, startDate, endDate, category, path },
}: Props) {
  return (
    <Link href={`/projects/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={SampleImage}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <time className=" text-gray-700 ">
            {startDate.toString()} ~ {endDate.toString()}
          </time>
          <p className="w-full truncate text-center">{intro}</p>
          <div>
            {category.map((tag) => (
              <span
                key={tag}
                className={`text-sm rounded-lg px-2 mr-1  ${
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
      </article>
    </Link>
  );
}
