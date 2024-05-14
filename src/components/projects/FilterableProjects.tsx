"use client";

import { Project } from "@/types/project";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import Categories from "./Categories";
import ProjectModal from "./detailProject/ProjectModal";
import ImageViewer from "./detailProject/ImageViewer";
import useModal from "@/hooks/useModal";

type Props = {
  projects: Project[];
  categories: string[];
};

const ALL_PROJECTS = "All";

export default function FilterableProjects({ projects, categories }: Props) {
  const [selected, setSelected] = useState(ALL_PROJECTS);

  const filtered =
    selected === ALL_PROJECTS
      ? projects
      : projects.filter((project) => project.category.includes(selected));

  const {
    isOpen: isModalOpen,
    selectedItem: selectedProjectPath,
    openModal: openProjectModal,
    closeModal: closeProjectModal,
  } = useModal<string>();

  const {
    isOpen: isImageViewerOpen,
    selectedItem: selectedImage,
    openModal: openImageViewer,
    closeModal: closeImageViewer,
  } = useModal<string>();

  const handleSelectProject = (path: string) => {
    openProjectModal(path);
  };

  const handleOpenViewer = () => {
    if (selectedImage) {
      openImageViewer(selectedImage);
    }
  };

  return (
    <section className="flex m-4 flex-col ">
      <div className="flex items-start">
        <Categories
          categories={[ALL_PROJECTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
      </div>
      <div className="flex justify-center items-center relative">
        <ProjectGrid
          projects={filtered}
          onSelectProject={handleSelectProject}
        />
        {isModalOpen && selectedProjectPath && (
          <ProjectModal
            projectPath={selectedProjectPath}
            onClose={closeProjectModal}
            selectImage={openImageViewer}
            onOpenViewer={handleOpenViewer}
          />
        )}
        {isImageViewerOpen && selectedImage && (
          <ImageViewer imageSrc={selectedImage} onClose={closeImageViewer} />
        )}
      </div>
    </section>
  );
}
