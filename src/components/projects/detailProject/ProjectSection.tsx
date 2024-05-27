import findProject from "@/service/findProject";
import { Project } from "@/types/project";
import dynamic from "next/dynamic";
import Image from "next/image";

const sectionConfig = {
  contribution: {
    iconSrc: "/images/icons/icon-sparkling.png",
    sectionTitle: "기여 부분",
    alt: "빛 아이콘",
  },
  troubleShooting: {
    iconSrc: "/images/icons/icon-bomb.png",
    sectionTitle: "Trouble Shooting",
    alt: "폭탄 아이콘",
  },
  review: {
    iconSrc: "/images/icons/icon-balloon.png",
    sectionTitle: "회고",
    alt: "풍선 아이콘",
  },
};

type ProjectSectionProps = {
  projectPath: string;
  section: "contribution" | "troubleShooting" | "review";
};
const DetailContent = dynamic(() => import("./DetailContent"));

export default function ProjectSection({
  projectPath,
  section,
}: ProjectSectionProps) {
  const project: Project | undefined = findProject(projectPath);

  if (!project) {
    return null;
  }
  const { iconSrc, sectionTitle, alt } = sectionConfig[section];

  const sectionData = project[section];

  return (
    <section className="mt-16">
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src={iconSrc}
          alt={alt}
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
          priority
        />
        <span>{sectionTitle}</span>
      </h4>
      {sectionData && <DetailContent contentList={sectionData} />}
    </section>
  );
}
