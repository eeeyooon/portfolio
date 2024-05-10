"use client";

import { Project } from "@/types/project";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import Categories from "./Categories";

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
        <ProjectGrid projects={filtered} />
      </div>
    </section>
  );
}
