"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FloatingArrowBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-7 h-7 md:w-9 md:h-9 mx-auto animate-pulse fixed z-20 bottom-10 right-10 md:right-14">
      <Link href="/">
        <IoIosArrowUp className=" w-6 h-6  md:w-7 md:h-7 " />
      </Link>
    </div>
  );
}
