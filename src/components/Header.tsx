import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold font-hambak border-b-[3px] border-b-blue_color pr-5 pb-1">
          yoon.
        </h1>
      </Link>
      <nav className="flex text-xl gap-6 font-hambak text-gray-500">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
