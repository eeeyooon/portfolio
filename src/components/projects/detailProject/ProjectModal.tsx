import tw from "tailwind-styled-components";
import ProjectShortcut from "./ProjectShortcut";
import ModalPortal from "../../common/ModalPortal";
import { projectDetailData } from "../../../../data/projects/projectDetailData.ts/projectDetailData";
import MainFeature from "./MainFeature";

type Props = {
  projectPath: string;
  onClose: () => void;
};

export default function ProjectModal({ projectPath, onClose }: Props) {
  const project = projectDetailData.find(
    (project) => project.path === projectPath
  );

  if (!project) {
    onClose();
    return null;
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
          <MainFeature project={project} />
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

const ModalContainer = tw.div`
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
  w-4/5
  h-full
  overflow-y-auto
  scrollbar-hide
  my-6
 `;
