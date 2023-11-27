import ProjectBox from "@/components/Projects/FeaturedProjectBox";
import { projects } from "../../../../data/projectData/projectData";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params: { slug } }: Props) {
  const slugProject = projects.filter((project) => project.path === slug);
  console.log(slugProject);

  const { title, intro } = slugProject[0];

  return (
    <>
      <ProjectBox project={slugProject[0]} />
    </>
  );
}
