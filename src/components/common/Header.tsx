"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const text = useTypeword("yoon.", 60);

  return (
    <header className="flex flex-col justify-between items-center mx-auto w-11/12  top-0 h-[10vh] md:backdrop-blur-sm md:flex-row md:sticky z-50 relative">
      <div className="w-full justify-between flex md:flex-col md:justify-between">
        <Link href="/">
          <span className="text-2xl font-light font-shrik border-b-[3px] border-b-blue_color pr-5">
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
        } font-dohyeon text-gray-500 `}
      >
        <ul
          className={`flex flex-col gap-4 py-5   text-base text-center md:flex-row md:gap-7 md:text-lg bg-none ${
            toggleHeader ? "bg-white opacity-90" : ""
          } md:bg-transparent`}
        >
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link href="/skills">Skills</Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={() => setToggleHeader(!toggleHeader)}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
