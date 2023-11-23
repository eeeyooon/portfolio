"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";

export default function Onboard() {
  const text = useTypeword("Frontend-Dev", 200);

  return (
    <section className="bg-primary font-scoreRegular  flex flex-col justify-center items-center h-screen selection:bg-red_color mt-8">
      <h1 className="flex flex-row text-6xl text-red_color w-[280px] md:w-[400px] h-[120px]">
        {text}
      </h1>
      <p className="text-base md:text-xl mt-4 text-center">
        <span className="font-bold">프론트엔드</span> 개발자
      </p>
      <p className="text-xl md:text-2xl text-center">
        <span className="font-bold">강지윤</span>입니다
      </p>
      <div className="flex flex-row gap-5 mt-4 text-xs font-bold md:text-base">
        <div>
          <Link href="#" target="_blank">
            GitHub
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank">
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
