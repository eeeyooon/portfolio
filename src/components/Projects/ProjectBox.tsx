import { Projects } from "@/types/projects";
import Image from "next/image";
import SampleImage from "../../../public/images/projectSample.png";

type Props = {
  project: Projects;
};

export default function ProjectBox({
  project: {
    title,
    intro,
    description,
    stacks,
    category,
    startDate,
    endDate,
    githubUrl,
    points,
    path,
  },
}: Props) {
  return (
    <article className="flex flex-col items-center justify-center w-full h-screen gap-2 md:even:flex-row md:odd:flex-row-reverse">
      <div className="relative overflow-hidden w-60 md:w-1/2 md:h-1/2">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Image
            src={SampleImage}
            alt="project_thumbnail"
            width={500}
            height={500}
            priority
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="text-lg md:text-xl">
        <div className="text-center md:text-left mb-4 mx-6">
          <h3 className="text-xl md:text-2xl ">{title}</h3>
          <span className="text-md md:text-base mr-2">{intro}</span>
          {category.map((keyword) => (
            <span
              key={keyword}
              className={`text-sm rounded-lg px-2 mr-1  ${
                keyword === "team"
                  ? "bg-red_color"
                  : keyword === "personal"
                  ? "bg-brown_color"
                  : "bg-yellow_color"
              }`}
            >
              {keyword}
            </span>
          ))}
          <p className="text-sm md:text-md text-gray-500 my-1">
            {startDate.toString()} - {endDate.toString()}
          </p>
          <div className="text-xs font-semibold md:text-sm text-blue_color inline-block">
            {stacks.map((stack) => (
              <span key={stack} className="mr-2">
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-6">
          <p className="text-base md:text-lg">{description}</p>
          <ul>
            {points.map((point) => (
              <li key={point} className="text-base md:text-lg">
                - {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
