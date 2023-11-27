import { projects } from "../../../data/projectData/projectData";
import ProjectBox from "./ProjectBox";
import Link from "next/link";

export default function FeaturedProjectsPage() {
  const featuredProject = projects.filter((project) => project.featured);
  return (
    <section>
      <h3>Featured Projects</h3>
      <p>프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.</p>
      <Link href="/projects">
        <button className="font-semibold text-red_color">
          더 많은 프로젝트 보러 가기
        </button>
      </Link>
      <ul>
        {featuredProject.map((project) => (
          <ProjectBox key={project.path} project={project} />
        ))}
      </ul>
    </section>
  );
}
