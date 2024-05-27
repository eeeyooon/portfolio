import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import StackIcons from "../StackIcons";
import { Project } from "@/types/project";
import findProject from "@/service/findProject";

type ProjectShortcutProps = {
  projectPath: string;
};
export default function ProjectShortcut({ projectPath }: ProjectShortcutProps) {
  const project: Project | undefined = findProject(projectPath);

  if (!project) {
    return null;
  }

  const {
    title,
    description,
    stacks,
    startDate,
    endDate,
    githubUrl,
    serviceUrl,
  } = project;

  return (
    <summary className="flex flex-col items-center mt-10">
      <h3 className="text-xl md:text-2xl font-semibold font-scoreRegular mt-5">
        {title}
      </h3>
      <div className="my-2 text-stone-500 selection:bg-stone-300">
        <span>{startDate} ~ </span>
        <span>{endDate}</span>
      </div>
      <div className="flex flex-row items-center md:justify-start justify-center text-gray-700 mt-2 mb-6 selection:bg-stone-300">
        {stacks.map((stack) => (
          <StackIcons key={stack} stack={stack} />
        ))}
      </div>
      <p className="text-md md:text-lg text-center w-auto sm:w-11/12 md:w-11/12 mb-10 whitespace-pre-wrap">
        {description}
      </p>
      <div className="flex flex-col  md:flex-row items-center gap-2 justify-center md:gap-8  text-sm md:text-base text-stone-600 selection:bg-stone-300">
        <Link
          href={githubUrl}
          target="_blank"
          className="flex flex-row items-center"
        >
          <IoLogoGithub className="w-5 h-5 md:w-6 md:h-6" />
          <span className="ml-3">깃허브 바로가기</span>
        </Link>
        {serviceUrl && (
          <Link
            href={serviceUrl}
            target="_blank"
            className="flex flex-row items-center"
          >
            <Image
              src="/images/icons/icon-link.png"
              alt="링크 아이콘"
              width={25}
              height={25}
              className="w-5 h-6 md:w-6 md:h-7"
            />
            <span className="ml-3">서비스 바로가기</span>
          </Link>
        )}
      </div>
      <div className="w-full h-[1px] bg-stone-300 mt-10 md:mt-14" />
    </summary>
  );
}
