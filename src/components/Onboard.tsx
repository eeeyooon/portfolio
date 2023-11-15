"use client";
import useTypeword from "@/hooks/useTypeword";

export default function Onboard() {
  const text = useTypeword("PORT\nFOLIO.", 300);

  return (
    <section className="bg-primary  text-center flex justify-center items-center h-auto selection:bg-red_color mt-20">
      <div className="relative mt-20 w-[1057px] h-[600px]">
        <span className=" text-[19rem] font-outline-red whitespace-pre-linere leading-[15rem] font-yeseva text-primary ">
          {text}
        </span>
        <div className="font-shrik text-red_color text-6xl leading-[2.8rem] absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-120%] ">
          Front-end
          <br /> Developer
        </div>
      </div>
    </section>
  );
}
