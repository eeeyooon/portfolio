"use client";

import { Projects } from "@/types/projects";
import Image from "next/image";
import StackIcons from "./StackIcons";
import ImageSlider from "./ImageSlider";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ROUTES from "@/constants/routes";

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
    serviceUrl,
    points,
    path,
    images,
  },
}: Props) {
  const pathname = usePathname();

  const getLinkHref = (route: string) => {
    return pathname === "/" ? route : "/" + route;
  };

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
          priority
        />
      );
    }
    return projectImages;
  };
  return (
    <article className="flex flex-col w-full h-full gap-2 py-10 selection:bg-brown_color">
      <Link href={getLinkHref(ROUTES.PROJECTS)} className="ml-4 mb-2">
        <button className="flex items-center">
          <FaArrowLeft className="w-3 h-3 lg:w-4 lg:h-4" />
          <span className="ml-2 text-sm lg:text-base">
            프로젝트 목록으로 돌아가기
          </span>
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row-reverse">
        <div className="relative overflow-hidden w-2/3 lg:w-2/3 md:w-1/3 sm:w-2/3 md:h-[200px] lg:h-auto lg:pl-20 object-cover">
          {images > 1 ? (
            <ImageSlider>{renderImages()}</ImageSlider>
          ) : (
            renderImages()
          )}
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="text-center lg:text-left md:text-left mb-4 mx-6">
            <div className="flex justify-center md:justify-start lg:justify-start items-center">
              <h3 className="text-xl md:text-2xl font-scoreRegular">{title}</h3>
              <Link href={githubUrl} target="_blank">
                <IoLogoGithub className="w-6 h-6 ml-2" />
              </Link>
            </div>
            <span className="text-lg mr-2">{intro}</span>
            {category.map((keyword) => (
              <span
                key={keyword}
                className={`text-sm rounded-lg px-2 mr-1  ${
                  keyword === "Team"
                    ? "bg-red_color"
                    : keyword === "Personal"
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
            {serviceUrl && (
              <Link href={serviceUrl} target="_blank">
                <p className="mx-auto lg:mx-0 md:mx-0 text-sm text-blue_color w-32 hover:font-semibold">
                  🎈 서비스 사용해보기
                </p>
              </Link>
            )}
          </div>
          <div className="mx-6">
            <p className="text-base md:text-lg">{description}</p>
          </div>
        </div>
      </div>
      <div className="text-left mx-6 mt-8">
        <ul>
          {points.map((point, idx) => (
            <li key={`${point}-${idx}`} className="text-base md:text-lg my-1">
              - {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
