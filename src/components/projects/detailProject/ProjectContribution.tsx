import MarkdownBox from "@/components/markdown/MarkdownBox";
import { Project } from "@/types/project";
import Image from "next/image";
import DetailContent from "./DetailContent";

type ProjectContributionProps = {
  project: Project;
};

export default function ProjectContribution({
  project,
}: ProjectContributionProps) {
  return (
    <section className="mt-12">
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src="/images/icons/icon-sparkling.png"
          alt="빛 아이콘"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
          priority
        />
        <span>기여 부분</span>
      </h4>
      {project.contribution && (
        <DetailContent contentList={project.contribution} />
      )}
    </section>
  );
}
