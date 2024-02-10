import { projects } from "../../../data/projects/projectData";
import ProjectBox from "./ProjectBox";
import Link from "next/link";

export default function FeaturedProjectsPage() {
  const featuredProject = projects.filter((project) => project.featured);
  return (
    <section className="mt-10">
      <h2 className="font-dohyeon tracking-tight text-brown_color text-xl md:text-2xl mb-4">
        Featured Projects
      </h2>
      <p className="text-sm md:text-base">
        프로젝트의 이미지를 클릭하면 해당 프로젝트의 레파지토리로 이동합니다.
        <br />
        다른 프로젝트들은 아래 링크를 클릭하면 볼 수 있습니다.
      </p>
      <button className="font-semibold text-blue_color text-sm md:text-base">
        <Link href="/projects">더 많은 프로젝트 보러가기</Link>
      </button>
      <ul>
        {featuredProject.map((project) => (
          <ProjectBox key={project.path} project={project} />
        ))}
      </ul>
      <p className="text-center mb-28 text-lg md:text-2xl font-shrik text-blue_color">
        <Link href="/projects"> ❤ Click to see more projects.</Link>
      </p>
    </section>
  );
}
