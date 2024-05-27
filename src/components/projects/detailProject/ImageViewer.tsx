import ModalPortal from "@/components/common/ModalPortal";
import Image from "next/image";
import tw from "tailwind-styled-components";

type ImageViewerProps = {
  imageSrc: string;
  onClose: () => void;
};

export default function ImageViewer({ imageSrc, onClose }: ImageViewerProps) {
  const stopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const filteredImageSrc =
    imageSrc[imageSrc.length - 1] === "1"
      ? imageSrc.substr(0, imageSrc.length - 1)
      : imageSrc;

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
            <div className="h-full flex justify-center items-center">
              <div className="relative w-[95vw] h-[95vw] sm:w-[85vw] sm:h-[65vw] md:w-[65vw] md:h-[40vw]">
                <Image
                  className="object-contain w-full h-full overflow-hidden absolute"
                  src={`/images/projects/${filteredImageSrc}.png`}
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 60vw"
                  fill={true}
                  alt={`${imageSrc} 이미지`}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </ModalContainer>
        </ModalWrapper>
      </ModalPortal>
    </>
  );
}

export const ModalWrapper = tw.div`
fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center items-center bg-black bg-opacity-80 z-40 
overflow-y-auto
scrollbar-hide
selection:bg-blueLight_color
`;

export const ModalContainer = tw.section`
  inset-x-0
  inset-y-0
  z-40
  my-0
  mx-auto
 `;
