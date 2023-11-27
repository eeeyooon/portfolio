import ProjectGrid from "@/components/Projects/ProjectGrid";
import { projects } from "../../../data/projectData/projectData";
export default async function ProjectsPage() {
  return (
    <section>
      <h3>Projects</h3>
      <p>프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.</p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
