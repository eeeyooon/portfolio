"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FloatingArrowBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log("handleScroll called");
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
    console.log("Scroll Y:", scrollY);
  };

  const handleScrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = document.body;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      setIsVisible(scrollY > 200);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className="w-7 h-7 md:w-9 md:h-9 mx-auto animate-pulse fixed z-20 bottom-10 right-10 md:right-14"
      onClick={handleScrollToTop}
    >
      <Link href="/">
        <IoIosArrowUp className=" w-6 h-6  md:w-7 md:h-7 " />
      </Link>
    </button>
  );
}
