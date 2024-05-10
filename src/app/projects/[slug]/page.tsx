import { projectDetailData } from "./../../../../data/projects/projectDetailData.ts/projectDetailData";
import ProjectBox from "@/components/projects/ProjectBox";
type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params: { slug } }: Props) {
  const slugProject = projectDetailData.filter(
    (project) => project.path === slug
  );

  return (
    <>
      <ProjectBox project={slugProject[0]} />
    </>
  );
}
