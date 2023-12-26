import Image from "next/image";
import ProfileImage from "../../../public/images/profile.png";
import AboutContent from "@/components/About/AboutContent";
import SlotMachine from "@/components/About/SlotMachine";
import { sentence } from "../../../data/about/aboutData";
export default function AboutPage() {
  return (
    <>
      <section className="container relative flex flex-col-reverse items-center h-screen gap-6 md:flex-row mt-10">
        <h2 className="absolute top-2 md:top-0 font-hambak text-red_color text-6xl mt-10">
          About Me
        </h2>
        <div className="flex flex-col w-full md:w-2/3">
          <h3 className="my-1 text-xl md:text-3xl">
            <SlotMachine sentence={sentence} />
          </h3>
          <AboutContent />
        </div>
        <div className="relative w-56 h-64 overflow-hidden md:w-96 md:h-96">
          <Image
            src={ProfileImage}
            alt="Pictiure of the author"
            width={300}
            height={200}
            priority
          />
        </div>
      </section>
    </>
  );
}
