import tw from "tailwind-styled-components";
import ProjectShortcut from "./ProjectShortcut";
import ModalPortal from "../../common/ModalPortal";
import { projectDetailData } from "../../../../data/projects/projectDetailData.ts/projectDetailData";
import MainFeature from "./MainFeature";
import ProjectSection from "./ProjectSection";
import ProjectImage from "./ProjectImage";
import Image from "next/image";

type Props = {
  projectPath: string;
  onClose: () => void;
  selectImage: (imageSrc: string) => void;
  onOpenViewer: () => void;
};

export default function ProjectModal({
  projectPath,
  onClose,
  selectImage,
  onOpenViewer,
}: Props) {
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
    <>
      <div className="fixed top-10 right-7 sm:right-28 md:right-12 z-[80] bg-white rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 overflow-hidden">
        <button onClick={onClose}>
          <Image
            src="/images/icons/icon-close-darkgray.svg"
            width={48}
            height={48}
            alt="닫기 아이콘"
          />
        </button>
      </div>
      <ModalPortal>
        <ModalWrapper onClick={onClose}>
          <ModalContainer onClick={stopPropagation}>
            <ProjectShortcut project={project} />
            <p className="text-2xl font-semibold md:font-bold md:text-3xl mb-8 md:mb-12 mt-10 md:mt-12">
              {projectType ? "팀 프로젝트" : "개인 프로젝트"}
            </p>
            <MainFeature project={project} />
            <ProjectSection project={project} section="contribution" />
            {project.troubleShooting && (
              <ProjectSection project={project} section="troubleShooting" />
            )}
            {project.review && (
              <ProjectSection project={project} section="review" />
            )}
            <ProjectImage
              onOpenViewer={onOpenViewer}
              selectImage={selectImage}
              project={project}
            />
          </ModalContainer>
        </ModalWrapper>
      </ModalPortal>
    </>
  );
}

const ModalWrapper = tw.div`
fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center items-center bg-black bg-opacity-60 z-40 
overflow-y-auto
scrollbar-hide
selection:bg-blueLight_color
`;

const ModalContainer = tw.section`
  inset-x-0
  inset-y-0
  z-40
  bg-white
  px-6
  py-4
  sm:px-14
  md:px-36
  md:py-4
  drop-shadow-xl
  border
  border-stone-100
  rounded-xl
  w-11/12
  sm:w-10/12
  md:w-10/12
  h-full
  overflow-y-auto
  scrollbar-hide
  my-6
 `;
