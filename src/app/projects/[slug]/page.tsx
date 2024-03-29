import { projects } from "../../../../data/projects/projectData";
import ProjectBox from "@/components/projects/ProjectBox";
type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params: { slug } }: Props) {
  const slugProject = projects.filter((project) => project.path === slug);

  return (
    <>
      <ProjectBox project={slugProject[0]} />
    </>
  );
}
