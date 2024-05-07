"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileImage from "../../../public/images/profile.jpg";
import { sentence } from "../../../data/about/aboutData";
import AboutContent from "@/components/about/AboutContent";
import SlotMachine from "@/components/about/SlotMachine";

export default function AboutPage() {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialMessage(false);
      controls.start("visible");
      document.body.style.overflow = "";
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [controls]);

  useEffect(() => {
    if (!showInitialMessage) {
      controls.start("visible");
    }
  }, [showInitialMessage, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showInitialMessage && (
          <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
          >
            <p className="my-1 text-lg text-center sm:text-left md:text-3xl font-scoreRegular">
              안녕하세요.
              <br />
              프론트엔드 개발자<span className="font-bold"> 강지윤</span>
              입니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {!showInitialMessage && (
        <motion.section
          className="h-full sm:h-screen"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <div
            id="about"
            className="container relative flex flex-col-reverse items-center gap-6 md:flex-row pt-24"
          >
            <motion.div
              className="flex flex-col w-full md:w-2/3"
              variants={itemVariants}
            >
              <motion.p
                className="my-1 text-lg text-center sm:text-left md:text-3xl font-scoreRegular"
                variants={itemVariants}
              >
                안녕하세요.
                <br />
                프론트엔드 개발자<span className="font-bold"> 강지윤</span>
                입니다.
              </motion.p>
              <div className="flex flex-row gap-5 text-xs md:text-base mt-4 mb-10 text-gray-500 w-full justify-center sm:justify-start md:justify-start selection:bg-brown_color">
                <Link
                  href="https://github.com/eeeyooon"
                  target="_blank"
                  className="hover:font-semibold"
                >
                  GitHub
                </Link>
                <a
                  href="mailto: vywns4569@gmail.com"
                  className="hover:font-semibold"
                >
                  Email
                </a>
                <Link href="#contact" className="hover:font-semibold">
                  Contact
                </Link>
              </div>
              <SlotMachine sentence={sentence} />
              <AboutContent />
            </motion.div>
            <motion.div
              className="relative w-48 h-60 md:w-80 md:h-96 overflow-hidden block sm:hidden lg:block md:hidden rounded-lg"
              variants={itemVariants}
            >
              <Image
                src={ProfileImage}
                alt="Picture of the author"
                width={300}
                height={400}
                priority
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
}
