"use client";

import Lottie from "react-lottie-player";
import scrollDown from "../../../public/images/lottie/scroll-down.json";

export default function ScrollDown() {
  return (
    <div className="w-7 h-7 md:w-9 md:h-9 mx-auto pulse-animation z-20">
      <div className="w-10 h-10 md:w-14 md:h-14">
        <Lottie animationData={scrollDown} loop play />
      </div>
    </div>
  );
}
