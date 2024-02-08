import Image from "next/image";
import ProfileImage from "../../../public/images/profile.png";
import AboutContent from "@/components/About/AboutContent";
import SlotMachine from "@/components/About/SlotMachine";
import { sentence } from "../../../data/about/aboutData";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      <section
        id="about"
        className="container relative flex flex-col-reverse items-center h-full sm:h-screen gap-6 md:flex-row pt-24"
      >
        <div className="flex flex-col w-full md:w-2/3">
          <p className="my-1 text-xl text-center sm:text-left md:text-3xl font-scoreRegular">
            안녕하세요.
            <br />
            프론트엔드 개발자<span className="font-bold"> 강지윤</span>입니다.
          </p>
          <div className="flex flex-row gap-5 text-xs md:text-base mt-4 mb-10 text-gray-500 w-full justify-center sm:justify-start md:justify-start">
            <Link href="https://github.com/eeeyooon" target="_blank">
              GitHub
            </Link>
            <a href="mailto: vywns4569@gmail.com">Email</a>
            <Link href="#contact">Contact</Link>
          </div>
          <SlotMachine sentence={sentence} />
          <AboutContent />
        </div>
        <div className="relative w-48 h-48 overflow-hidden md:w-96 md:h-96">
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
