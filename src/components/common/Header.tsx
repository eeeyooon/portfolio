"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";
import { useState } from "react";
import ROUTES from "@/constants/routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const text = useTypeword("eeeyoon.", 60);
  const pathname = usePathname();

  const getLinkHref = (route: string) => {
    return pathname === "/" ? route : "/" + route;
  };

  return (
    <header className="flex flex-col justify-between items-center mx-auto w-full px-8 top-0 sm:h-[12vh] md:h-[12vh] lg:h-[10vh] backdrop-blur-sm md:flex-row sticky z-50 pb-[3px] selection:bg-brown_color">
      <div className="w-full justify-between flex md:flex-col md:justify-between">
        <Link href="/">
          <span className="text-2xl font-light font-shrik text-blue_color pl-2">
            {text}
          </span>
        </Link>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setToggleHeader(!toggleHeader)}
        >
          {toggleHeader ? "close" : "open"}
        </button>
      </div>
      <nav
        className={`absolute top-[5vh] transition-all duration-300 ease-in-out md:static md:opacity-100 left-0 w-full md:w-fit  ${
          toggleHeader
            ? "top-[5vh] opacity-100 md:top-0 pointer-events-auto"
            : "top-[-200vh] opacity-0  pointer-events-none lg:pointer-events-auto md:pointer-events-auto"
        } font-dohyeon text-gray-600 `}
      >
        <ul
          className={`flex flex-col gap-4 py-5 text-base text-center md:flex-row md:gap-7 md:text-lg bg-none ${
            toggleHeader ? "bg-white opacity-90" : ""
          } md:bg-transparent`}
        >
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link
              href={getLinkHref(ROUTES.ABOUT)}
              className="hover:text-blue_color"
            >
              About
            </Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link
              href={getLinkHref(ROUTES.SKILLS)}
              className="hover:text-blue_color"
            >
              Skills
            </Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link
              href={getLinkHref(ROUTES.PROJECTS)}
              className="hover:text-blue_color"
            >
              Projects
            </Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link
              href={getLinkHref(ROUTES.CONTACT)}
              className="hover:text-blue_color"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
