import Image from "next/image";
import ProfileImage from "../../../public/images/profile.png";
import SlotMachine from "@/components/About/SlotMachine";
import { sentence } from "../../../data/about/aboutData";
export default function AboutPage() {
  return (
    <>
      <section className="mt-32 mx-20 mb-12">
        <h2 className="font-hambak text-red_color text-7xl mb-8">About Me</h2>
        <div className="flex flex-row-reverse h-full justify-center">
          <Image
            src={ProfileImage}
            alt="Pictiure of the author"
            width={400}
            height={300}
            priority
          />
          <div className="pt-20 mr-20">
            <SlotMachine sentence={sentence} />

            <p className="text-3xl mb-14 mt-10">
              별 하나에 추억과 별 하나에머니, 어머님, 나는 별 하나에 아름다운 말
              한 마디씩 불러 봅니다. 그러나, 겨울이 지나고 나의 별에도 봄이
              오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도
              자랑처럼 풀이 무성할 거외다. 별 하나에 추억과 별 하나에 사랑과 별
              하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니,
              어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.
              어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
