"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function FloatingArrowBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-7 h-7 md:w-9 md:h-9 mx-auto pulse-animation fixed z-20 bottom-10 right-10 md:right-14">
      <Link href="/">
        <FaArrowAltCircleUp className="text-gray-300 w-7 h-7  md:w-8 md:h-8  bg-white rounded-full" />
      </Link>
    </div>
  );
}
