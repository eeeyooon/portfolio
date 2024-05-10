import tw from "tailwind-styled-components";
import ProjectShortcut from "./ProjectShortcut";

export default function ProjectModal() {
  return (
    <ModalContainer>
      <section>
        <ProjectShortcut />
      </section>
    </ModalContainer>
  );
}

const ModalContainer = tw.article`
  absolute
  inset-x-0
  inset-y-0
  z-20
  bg-white
  overflow-y-auto
  scrollbar-hide
  py-10
  px-40
  max-md:px-10
  max-md:py-4
  drop-shadow-xl
  border
  border-stone-100
  rounded-xl
 `;
