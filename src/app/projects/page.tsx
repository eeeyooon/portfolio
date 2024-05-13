import { projectDetailData } from "./../../../data/projects/projectDetailData.ts/projectDetailData";
import FilterableProjects from "@/components/projects/FilterableProjects";
export default async function ProjectsPage() {
  const categories = Array.from(
    new Set(projectDetailData.flatMap((project) => project.category))
  ).sort();
  return (
    <section
      id="projects"
      className="h-full pt-12 mb-4 selection:bg-blueLight_color"
    >
      <h2 className="text-center font-dohyeon text-blue_color text-xl md:text-3xl mb-6 selection:bg-brown_color">
        Projects
      </h2>
      <p className="text-center w-60 sm:w-auto md:w-auto lg:w-auto mx-auto font-scoreRegular text-sm sm:text-lg md:text-xl text-stone-700">
        프로젝트를 클릭하면 해당 프로젝트의 상세 내용을 확인할 수 있습니다.
      </p>
      <FilterableProjects
        projects={projectDetailData}
        categories={categories}
      />
    </section>
  );
}
