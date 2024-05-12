import { Project } from "@/types/project";
import Image from "next/image";
import DetailContent from "./DetailContent";

const sectionConfig = {
  contribution: {
    iconSrc: "/images/icons/icon-sparkling.png",
    sectionTitle: "기여 부분",
  },
  troubleShooting: {
    iconSrc: "/images/icons/icon-bomb.png",
    sectionTitle: "Trouble Shooting",
  },
};

type ProjectSectionProps = {
  project: Project;
  section: "contribution" | "troubleShooting";
};

export default function ProjectSection({
  project,
  section,
}: ProjectSectionProps) {
  const { iconSrc, sectionTitle } = sectionConfig[section];

  const sectionData = project[section];

  return (
    <section className="mt-12">
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src={iconSrc}
          alt="빛 아이콘"
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
