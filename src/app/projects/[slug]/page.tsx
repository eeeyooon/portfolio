import ProjectBox from "@/components/Projects/ProjectBox";
import { projects } from "../../../../data/projectData/projectData";

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
