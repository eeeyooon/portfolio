"use client";

import { Project } from "@/types/project";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import Categories from "./Categories";
import ProjectModal from "./ProjectModal";

type Props = {
  projects: Project[];
  categories: string[];
};

const ALL_PROJECTS = "All";

export default function FilterableProjects({ projects, categories }: Props) {
  const [selected, setSelected] = useState(ALL_PROJECTS);
  const [selectedProjectPath, setSelectedProjectPath] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    selected === ALL_PROJECTS
      ? projects
      : projects.filter((project) => project.category.includes(selected));

  const handleSelectProject = (path: string) => {
    setSelectedProjectPath(path);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectPath(null);
  };

  return (
    <section className="flex m-4 flex-col">
      <div className="flex items-start">
        <Categories
          categories={[ALL_PROJECTS, ...categories]}
          selected={selected}
          onClick={setSelected}
        />
      </div>
      <div className="flex justify-center items-center">
        <ProjectGrid
          projects={filtered}
          onSelectProject={handleSelectProject}
        />
        {isModalOpen && selectedProjectPath && (
          <ProjectModal
            projectPath={selectedProjectPath}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}
