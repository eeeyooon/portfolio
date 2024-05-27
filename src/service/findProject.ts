import { Project } from "@/types/project";
import { projectDetailData } from "../../data/projects/projectDetailData.ts/projectDetailData";

const findProject = (projectPath: string): Project | undefined => {
  return projectDetailData.find((project) => project.path === projectPath);
};

export default findProject;
