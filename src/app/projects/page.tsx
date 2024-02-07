import ProjectGrid from "@/components/Projects/ProjectGrid";
import { projects } from "../../../data/projectData/projectData";
export default async function ProjectsPage() {
  return (
    <section
      id="projects"
      className="h-screen pt-24 mb-48 selection:bg-blue_color"
    >
      <h2 className="text-center font-dohyeon text-blue_color text-xl md:text-3xl mb-6">
        Projects
      </h2>
      <p className="text-center text-base md:text-xl">
        프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
