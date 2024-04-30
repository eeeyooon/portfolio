"use client";

import { Projects } from "@/types/projects";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import Categories from "./Categories";

type Props = {
  projects: Projects[];
  categories: string[];
};

const ALL_PROJECTS = "All Projects";

export default function FilterableProjects({ projects, categories }: Props) {
  const [selected, setSelected] = useState(ALL_PROJECTS);
  const filtered =
    selected === ALL_PROJECTS
      ? projects
      : projects.filter((project) => project.category.includes(selected));
  return (
    <section>
      <ProjectGrid projects={filtered} />
      <Categories
        categories={[ALL_PROJECTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
