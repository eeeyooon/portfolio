import { Projects } from "@/types/projects";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  projects: Projects[];
};

export default function ProjectGrid({ projects }: Props) {
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
          <ProjectCard project={project} />
        </motion.li>
      ))}
    </ul>
  );
}
