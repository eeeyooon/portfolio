import ProjectGrid from "@/components/Projects/ProjectGrid";
import { projects } from "../../../data/projectData/projectData";
export default async function ProjectsPage() {
  return (
    <section className="h-full my-10">
      <h2 className="text-center font-hambak text-blue_color text-5xl md:text-6xl  mb-8">
        Projects
      </h2>
      <p className="text-center text-base md:text-xl">
        프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
