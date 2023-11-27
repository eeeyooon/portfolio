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
          />
        </a>
      </div>
      <div className="text-lg md:text-xl">
        <div className="text-center mb-4">
          <h3 className="text-xl md:text-2xl ">{title}</h3>
          <p className="text-center text-md md:text-base">{intro}</p>
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
          <p className="text-sm md:text-md text-gray-500">
            {startDate.toString()} - {endDate.toString()}
          </p>
          <span className="mr-2 text-sm font-semibold md:text-base text-blue_color">
            {stacks}
          </span>
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
