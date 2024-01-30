import { Projects } from "@/types/projects";
import Image from "next/image";
import StackIcons from "./StackIcons";
import ImageSlider from "./ImageSlider";

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
    images,
  },
}: Props) {
  const renderImages = () => {
    let projectImages = [];
    for (let i = 0; i < images; i++) {
      projectImages.push(
        <Image
          key={`${title} + ${i}`}
          className="rounded-lg"
          src={`/images/projects/${path}${i > 0 ? i + 1 : ""}.png`}
          alt={`${title} 이미지 ${i + 1}`}
          width={500}
          height={500}
        />
      );
    }
    return projectImages;
  };
  return (
    <article className="flex flex-col items-center justify-center w-full h-screen gap-2 md:even:flex-row md:odd:flex-row-reverse">
      <div className="relative overflow-hidden w-60 md:w-1/2 md:h-1/2">
        {images > 1 ? (
          <ImageSlider>{renderImages()}</ImageSlider>
        ) : (
          renderImages()
        )}
      </div>
      <div className="text-lg md:text-xl">
        <div className="text-center md:text-left mb-4 mx-6">
          <h3 className="text-xl md:text-2xl font-scoreRegular ">{title}</h3>
          <span className="text-lg mr-2">{intro}</span>
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
            {startDate.toString()} ~ {endDate.toString()}
          </p>
          <div className="flex flex-row items-center md:justify-start justify-center text-gray-700 my-2 ">
            {stacks.map((stack) => (
              <StackIcons key={stack} stack={stack} />
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
