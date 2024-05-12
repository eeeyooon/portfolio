import { Project } from "@/types/project";
import Image from "next/image";

type MainFeatureProps = {
  project: Project;
};

export default function MainFeature({ project }: MainFeatureProps) {
  const { category, points } = project;
  const projectType = category.includes("Team");
  return (
    <div className="mt-20">
      <p className="text-2xl font-semibold md:font-bold md:text-3xl mb-12">
        {projectType ? "팀 프로젝트" : "개인 프로젝트"}
      </p>
      <div>
        <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
          <Image
            src="/images/icons/icon-pin.png"
            alt="핀 아이콘"
            width={25}
            height={25}
            style={{ width: 25, height: 25 }}
            priority
          />
          <span>주요 기능 및 특징</span>
        </h4>
        <ul>
          {points.map((point, idx) => (
            <li
              key={`${project}${idx}`}
              className="list-disc ml-4 marker:text-blue_color text-base md:text-lg my-1"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
