import FeaturedProjectBox from "@/components/Projects/FeaturedProjectBox";
import { projects } from "../../../data/projectData/projectData";
import Link from "next/link";

export default async function ProjectsPage() {
  return (
    <section>
      <h3>Projects</h3>
      <p>프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.</p>
      {projects.map((project) => (
        <Link key={project.path} href={`/projects/${project.path}`}>
          <div>{project.title}</div>
        </Link>
      ))}
    </section>
  );
}
