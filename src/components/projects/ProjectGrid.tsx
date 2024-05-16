import { Project } from "@/types/project";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

type Props = {
  projects: Project[];
  onSelectProject: (projectPath: string) => void;
};

const ProjectCard = dynamic(() => import("./ProjectCard"));

export default function ProjectGrid({ projects, onSelectProject }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const sortedProjects = projects.sort((a, b) =>
    a.endDate > b.endDate ? -1 : 1
  );

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ul
      ref={ref}
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-14 font-scoreRegular"
    >
      {sortedProjects.map((project, index) => (
        <motion.li
          key={project.path}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.2, duration: 0.8, ease: "easeInOut" }}
        >
          <ProjectCard project={project} onSelectProject={onSelectProject} />
        </motion.li>
      ))}
    </ul>
  );
}
