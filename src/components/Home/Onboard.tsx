"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";

export default function Onboard() {
  const text = useTypeword("eeeyooon", 100);

  return (
    <section className="bg-primary h-screen text-center flex flex-col justify-center items-center selection:bg-red_color">
      <p className="font-shrik text-red_color md:text-7xl text-5xl">{text}</p>
      <div className="text-xl md:text-2xl h-10 mt-4">
        <p className="font-bold">
          프론트엔드 개발자 <br />강지윤입니다.
        </p>
      </div>
      <div className="flex flex-row gap-5 text-xs font-bold md:text-base mt-8">
        <Link href="#" target="_blank">
          GitHub
        </Link>
        <Link href="#" target="_blank">
          Resume
        </Link>
        <Link href="#" target="_blank">
          Contact
        </Link>
      </div>
    </section>
  );
}
