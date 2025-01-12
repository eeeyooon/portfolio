"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Skill = {
  category: string;
  skills: string[];
};

type Props = {
  skills: Skill[];
};

export default function SkillGrid({ skills }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div ref={ref} className="mt-8 mb-14">
      {skills.map((skillCategory, index) => (
        <motion.div
          key={skillCategory.category}
          className="mb-8"
          variants={categoryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.4 }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-20">
            <h3 className="font-spoqa font-light text-lg md:text-xl  text-gray-500 w-[200px] lg:w-[210px]">
              {skillCategory.category}
            </h3>
            <motion.ul className="flex flex-wrap gap-2" initial="hidden" animate="visible">
              {skillCategory.skills.map((skill) => (
                <motion.li
                  key={skill}
                  className="px-4 py-2 border border-black rounded-full bg-white_gray text-sm md:text-base text-center shadow-sm transition hover:shadow-md hover:bg-gray-100"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
