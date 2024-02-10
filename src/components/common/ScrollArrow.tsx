"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";

type Props = {
  targetId: string;
};

export default function ScrollArrow({ targetId }: Props) {
  const pathname = usePathname();

  const getLinkHref = (route: string) => {
    return pathname === "/" ? route : "/" + route;
  };

  return (
    <div className="w-6 h-6 mx-auto pulse-animation  invisible lg:visible">
      <Link href={getLinkHref(targetId)}>
        {targetId === "#about" ? (
          <FaArrowAltCircleUp className="text-gray-300 w-6 h-6" />
        ) : (
          <FaArrowCircleDown className="text-gray-300 w-6 h-6" />
        )}
      </Link>
    </div>
  );
}
