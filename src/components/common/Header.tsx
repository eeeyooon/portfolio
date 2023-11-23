"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  return (
    <header className="flex flex-col justify-between items-center mx-auto w-4/5 p-4 relative top-0 h-[10vh] md:backdrop-blur-sm md:flex-row md:sticky  z-50">
      <div className="w-full justify-between flex md:flex-col md:justify-between">
        <Link href="/">
          <span className="text-2xl font-bold font-hambak border-b-[3px] border-b-blue_color pr-5 pb-1">
            yoon
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
        className={`absloute top-[10vh] left-0 w-full md:static md:opacity-100 md:w-fit   ${
          toggleHeader
            ? "top-[10vh] opacity-100 md:top-0"
            : "top-[-50vh] opacity-0"
        } font-hambak text-gray-500 `}
      >
        <ul className="flex flex-col gap-6 py-5 text-base text-center md:flex-row md:gap-7 md:text-lg">
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
