import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>yoon.</h1>
      </Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/skills">skills</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
