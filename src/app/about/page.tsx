import Image from "next/image";
import ProfileImage from "../../../public/images/profile.jpg";
import { sentence } from "../../../data/about/aboutData";
import Link from "next/link";
import ScrollArrow from "@/components/common/ScrollArrow";
import AboutContent from "@/components/About/AboutContent";
import SlotMachine from "@/components/About/SlotMachine";
export default function AboutPage() {
  return (
    <>
      <section className=" h-full sm:h-screen">
        <div
          id="about"
          className="container relative flex flex-col-reverse items-center gap-6 md:flex-row pt-24"
        >
          <div className="flex flex-col w-full md:w-2/3">
            <p className="my-1 text-xl text-center sm:text-left md:text-3xl font-scoreRegular">
              안녕하세요.
              <br />
              프론트엔드 개발자<span className="font-bold"> 강지윤</span>입니다.
            </p>
            <div className="flex flex-row gap-5 text-xs md:text-base mt-4 mb-10 text-gray-500 w-full justify-center sm:justify-start md:justify-start selection:bg-brown_color">
              <Link
                href="https://github.com/eeeyooon"
                target="_blank"
                className="hover:font-semibold"
              >
                GitHub
              </Link>
              <a
                href="mailto: vywns4569@gmail.com"
                className="hover:font-semibold"
              >
                Email
              </a>
              <Link href="#contact" className="hover:font-semibold">
                Contact
              </Link>
            </div>
            <SlotMachine sentence={sentence} />
            <AboutContent />
          </div>
          <div className="relative w-48 h-60 overflow-hidden md:w-80 md:h-96">
            <Image
              src={ProfileImage}
              alt="Pictiure of the author"
              width={300}
              height={200}
              priority
            />
          </div>
        </div>
        <ScrollArrow targetId="#skills" />
      </section>
    </>
  );
}
