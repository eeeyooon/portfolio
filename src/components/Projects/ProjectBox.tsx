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
          width={400}
          height={400}
        />
      );
    }
    return projectImages;
  };
  return (
    <article className="flex flex-col w-full h-full gap-2 py-10">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row-reverse">
        <div className="relative overflow-hidden w-2/3 lg:w-2/3 md:w-1/3 sm:w-2/3 md:h-[200px] lg:h-auto lg:pl-20">
          {images > 1 ? (
            <ImageSlider>{renderImages()}</ImageSlider>
          ) : (
            renderImages()
          )}
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="text-center lg:text-left md:text-left mb-4 mx-6">
            <h3 className="text-xl md:text-2xl font-scoreRegular">{title}</h3>
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
          </div>
        </div>
      </div>
      <div className="text-left mx-6 mt-8">
        <ul>
          {points.map((point, idx) => (
            <li key={`${point}-${idx}`} className="text-base md:text-lg">
              - {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
