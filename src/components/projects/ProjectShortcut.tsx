import Image from "next/image";
import { project9 } from "../../../data/projects/projectDetailData.ts/project9";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import StackIcons from "./StackIcons";

export default function ProjectShortcut() {
  const {
    title,
    description,
    stacks,
    startDate,
    endDate,
    githubUrl,
    serviceUrl,
    path,
  } = project9;

  return (
    <article className="flex flex-col items-center">
      <Image
        className="rounded-lg"
        src={`/images/projects/${path}.png`}
        alt={`${title} 이미지`}
        width={400}
        height={400}
        priority
      />
      <h3 className="text-xl md:text-2xl font-scoreRegular mt-5">{title}</h3>
      <div className="my-2 text-stone-500">
        <span>{startDate} ~ </span>
        <span>{endDate}</span>
      </div>
      <div className="flex flex-row items-center md:justify-start justify-center text-gray-700 mt-2 mb-6 ">
        {stacks.map((stack) => (
          <StackIcons key={stack} stack={stack} />
        ))}
      </div>
      <p className="text-center w-auto sm:w-10/12 md:w-9/12 mb-10">
        {description}
      </p>
      <div className="flex flex-col  md:flex-row items-center gap-2 justify-center md:gap-8  text-sm md:text-base text-stone-600">
        <Link
          href={githubUrl}
          target="_blank"
          className="flex flex-row items-center"
        >
          <IoLogoGithub className="w-5 h-5 md:w-6 md:h-6" />
          <span className="ml-3">깃허브 바로가기</span>
        </Link>
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
      </div>
      <div className="w-full h-[1px] bg-stone-300 mt-16"></div>
    </article>
  );
}
