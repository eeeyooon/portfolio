import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-xl font-bold font-hambak">yoon.</h1>
      </Link>
      <nav className="flex gap-4 font-hambak text-gray-500">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/skills">skills</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
