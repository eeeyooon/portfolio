import tw from "tailwind-styled-components";
import ProjectShortcut from "./ProjectShortcut";
import ModalPortal from "../../common/ModalPortal";
import { projectDetailData } from "../../../../data/projects/projectDetailData.ts/projectDetailData";
import MainFeature from "./MainFeature";
import ProjectSection from "./ProjectSection";

type Props = {
  projectPath: string;
  onClose: () => void;
};

export default function ProjectModal({ projectPath, onClose }: Props) {
  const project = projectDetailData.find(
    (project) => project.path === projectPath
  );

  let projectType;

  if (!project) {
    onClose();
    return null;
  } else {
    const { category } = project;
    projectType = category.includes("Team");
  }

  const stopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <ModalPortal>
      <ModalWrapper onClick={onClose}>
        <ModalContainer onClick={stopPropagation}>
          <button onClick={onClose}>close</button>
          <ProjectShortcut project={project} />
          <p className="text-2xl font-semibold md:font-bold md:text-3xl mb-8 md:mb-12 mt-10 md:mt-12">
            {projectType ? "팀 프로젝트" : "개인 프로젝트"}
          </p>
          <MainFeature project={project} />
          <ProjectSection project={project} section="contribution" />
          <ProjectSection project={project} section="troubleShooting" />
        </ModalContainer>
      </ModalWrapper>
    </ModalPortal>
  );
}

const ModalWrapper = tw.div`
fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center items-center bg-black bg-opacity-60 z-40 
overflow-y-auto
scrollbar-hide
`;

const ModalContainer = tw.section`
  inset-x-0
  inset-y-0
  z-40
  bg-white
  py-10
  px-40
  max-md:px-10
  max-md:py-4
  drop-shadow-xl
  border
  border-stone-100
  rounded-xl
  w-11/12
  sm:w-10/12
  md:w-4/5
  h-full
  overflow-y-auto
  scrollbar-hide
  my-6
 `;
