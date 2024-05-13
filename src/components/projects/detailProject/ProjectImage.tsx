import { Project } from "@/types/project";
import Image from "next/image";

type ProjectImageProp = {
  project: Project;
};

export default function ProjectImage({ project }: ProjectImageProp) {
  const { title, path, images } = project;

  const renderImages = () => {
    let projectImages = [];
    for (let i = 0; i < images; i++) {
      projectImages.push(
        <div
          key={`${title} + ${i}`}
          className="relative w-[38vw] h-[25vw] sm:w-[22vw] sm:h-[15vw] md:w-[18vw] md:h-[13vw]
    "
        >
          <Image
            className="object-cover w-full h-full overflow-hidden absolute rounded-lg border-stone-300 border-[1px]"
            src={`/images/projects/${path}${i > 0 ? i + 1 : ""}.png`}
            alt={`${title} 이미지 ${i + 1}`}
            quality={100}
            fill={true}
            sizes="(max-width: 768px) 18vw, (max-width: 1200px) 22vw, 38vw"
            priority
          />
        </div>
      );
    }
    return projectImages;
  };

  return (
    <section className="mt-12 mb-10">
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src="/images/icons/icon-monitor.png"
          alt="화면 아이콘"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
          priority
        />
        <span>작업 화면</span>
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center px-0 lg:px-10">
        {renderImages()}
      </div>
    </section>
  );
}
