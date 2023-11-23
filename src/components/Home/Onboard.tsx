"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";

export default function Onboard() {
  const text = useTypeword("PORT\nFOLIO.", 200);

  return (
    <section className=" bg-primary h-screen text-center flex justify-center items-center selection:bg-red_color mt-8">
      <div className="relative mt-20 md:w-[1057px] h-[600px] w-[400px]">
        <span className="md:text-[18rem] text-[8rem] md:font-outline-red whitespace-pre-linere leading-[15rem] font-yeseva text-primary ">
          {text}
        </span>
        <div className="font-shrik text-red_color md:text-6xl text-4xl leading-[2.8rem] absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-120%] ">
          Front-end
          <br /> Developer
        </div>
      </div>
    </section>
  );
}
