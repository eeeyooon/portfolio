import { Projects } from "@/types/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Projects[];
};

export default function ProjectGrid({ projects }: Props) {
  const sortedProjects = projects.sort((a, b) =>
    a.startDate > b.startDate ? -1 : 1
  );
  return (
    <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mb-14 font-scoreRegular">
      {sortedProjects.map((project) => (
        <li key={project.path}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
