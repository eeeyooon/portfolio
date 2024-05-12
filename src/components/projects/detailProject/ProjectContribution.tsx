import MarkdownBox from "@/components/markdown/MarkdownBox";
import { Project } from "@/types/project";
import Image from "next/image";

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
      <ul className="text-base md:text-lg">
        {project.contribution?.map((item, idx) => (
          <li key={`${project} 기여도 ${idx}`}>
            <dl>
              <dt className="bg-stone-200 p-2 pl-4 mb-2 font-semibold">
                {item.title}
              </dt>
              {item.detail?.map((detailItem, idx) => (
                <dd
                  key={`${detailItem}${idx}`}
                  className="list-item list-disc ml-6 marker:text-blue_color my-1 last:mb-4"
                >
                  <MarkdownBox>{detailItem}</MarkdownBox>
                </dd>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}
