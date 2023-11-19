"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuShuffle } from "react-icons/lu";

type Props = {
  sentence: string[];
};

export default function SlotMachine({ sentence }: Props) {
  const [count, setCount] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const textList = Array(5).fill(sentence).flat();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prev) => {
        return prev < textList.length - 1 - count ? prev + 1 : prev;
      });
    }, 10 * (curIndex + 1) * 0.5);
    return () => clearInterval(interval);
  }, [curIndex, count, textList.length]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: "-50%", opacity: 0 },
    animate: ({ isLast }) => ({
      scaleY: 1,
      y: 0,
      opacity: 1,
      filter: isLast ? undefined : "blur(1.5px)",
    }),
    exit: { scaleY: 0.3, y: "50%", opacity: 0 },
  };
  function handleClick() {
    setCurIndex(0);
    setCount((prev) => {
      return prev < sentence.length - 1 ? prev + 1 : 0;
    });
  }

  return (
    <div className="flex justify-between">
      <AnimatePresence mode="popLayout">
        {textList.map((text, i) => {
          const isLast = i === textList.length - 1 - count;
          return (
            i === curIndex && (
              <motion.p
                className="overflow-hidden text-4xl font-thin text-gray-700"
                key={text}
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: isLast ? 0.1 : 0.01,
                  ease: isLast ? "easeInOut" : "linear",
                }}
              >
                {text}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <motion.button
        className="mr-[400px] text-3xl"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        <LuShuffle />
      </motion.button>
    </div>
  );
}
